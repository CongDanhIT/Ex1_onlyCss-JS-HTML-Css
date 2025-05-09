export default function loadHero() {
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "shop.html") {
        setTimeout(() => {
            const heroSection = document.querySelector("#hero");
            if (heroSection) {
                heroSection.id = "page-header"; // Thay đổi id thành page-header
                const elements = heroSection.querySelectorAll("h4, h1,button");
                elements.forEach(el => el.remove());
                
                // Thêm nội dung mới cho h2 và p
                const h2 = heroSection.querySelector("h2");
                const p = heroSection.querySelector("p");

                if (h2) {
                    h2.textContent = "#Stay home"; // Thêm nội dung cho h2
                }
                if (p) {
                    p.textContent = "Save more with coupon & up to 70% off!"; // Thêm nội dung cho p
                }
            }
        }, 200);
    }
    else if (currentPage === "blog.html") {
        setTimeout(() => {
            const heroSection = document.querySelector("#hero");
            if (heroSection) {
                heroSection.id = "page-header-blog"; // Thay đổi id thành page-header
                const elements = heroSection.querySelectorAll("h4, h1,button");
                elements.forEach(el => el.remove());
                
                // Thêm nội dung mới cho h2 và p
                const h2 = heroSection.querySelector("h2");
                const p = heroSection.querySelector("p");

                if (h2) {
                    h2.textContent = "#Learn more about our products"; // Thêm nội dung cho h2
                }
                if (p) {
                    p.textContent = "Read all case studies about our products!"; // Thêm nội dung cho p
                }
            }
        }, 200);
    }
    else if (currentPage === "about.html") {
        setTimeout(() => {
            const heroSection = document.querySelector("#hero");
            if (heroSection) {
                heroSection.id = "page-header-about"; // Thay đổi id thành page-header
                const elements = heroSection.querySelectorAll("h4, h1,button");
                elements.forEach(el => el.remove());
                
                // Thêm nội dung mới cho h2 và p
                const h2 = heroSection.querySelector("h2");
                const p = heroSection.querySelector("p");

                if (h2) {
                    h2.textContent = "#KnowUs"; // Thêm nội dung cho h2
                }
                if (p) {
                    p.textContent = "Discover our mission and values!"; // Thêm nội dung cho p
                }
            }
        }, 200);
    }
}