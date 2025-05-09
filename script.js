import loadHero from './javascripts/loadComponent/loadHero.js';
import { loadMainImg } from './javascripts/loadComponent/loadMainImg.js';

// Chỉ load MainImg khi ở trang sproduct.html
const currentPage = window.location.pathname.split("/").pop();
if (currentPage === "sproduct.html") {
    loadMainImg();
}

const load = async (el, path) => {
    try {
        const res = await fetch(path);
        const html = await res.text();
        document.querySelector(el).innerHTML = html;
        
        // Nếu đang load header, thì setup event listener sau khi load xong
        if (el === "#header") {
            setTimeout(() => {
                const bar = document.getElementById("bar");
                const nav = document.querySelector("#navbar ul");
                const close = document.getElementById("close-menu");
                
                // Setup mobile menu
                if (close) {
                    close.addEventListener("click", () => {
                        nav.classList.remove("active");
                    });
                }
                if (bar && nav) {
                    bar.addEventListener("click", () => {
                        nav.classList.add("active");
                    });
                }

                // Setup active link
                const currentPage = window.location.pathname.split("/").pop() || 'index.html';
                const navLinks = document.querySelectorAll("#navbar a");
                
                console.log('Current page:', currentPage); // Debug
                
                navLinks.forEach(link => {
                    const href = link.getAttribute("href");
                    console.log('Checking link:', href); // Debug
                    
                    if (href === currentPage ) {
                        link.classList.add("active");
                    } 
                    else if (currentPage === "sproduct.html" && href === "shop.html") {
                        link.classList.add("active");
                        const products2Section = document.querySelector("#products2");
                        const h2 = products2Section.querySelector("h2");
                        const p = products2Section.querySelector("p");
                        h2.textContent = "Featured Products"; // Thay đổi nội dung h2
        
                        const elements = products2Section.querySelectorAll(".pro"); // lấy tất cả thẻ có class "pro"

                        const last4Elements = Array.from(elements).slice(-4); // lấy 4 phần tử cuối cùng

                        last4Elements.forEach(el => el.remove()); // xóa từng phần tử
                    }
                    else {
                        link.classList.remove("active");
                    }
                    
                });
            }, 100);
        }
    } catch (error) {
        console.error("Error loading component:", error);
    }
};

// Load các components
load("#header", "../partials/header.html");
load("#footer", "../partials/footer.html");
load("#hero", "../partials/hero.html").then(() => {
    loadHero();
});
load(".pro-container", "../partials/products.html");
load(".pro-container2", "../partials/products.html");
