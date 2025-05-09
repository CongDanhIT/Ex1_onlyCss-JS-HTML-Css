export function loadMainImg() {
    // Đợi DOM load xong
    document.addEventListener('DOMContentLoaded', () => {
        const MainImg = document.querySelector(".MainImg");
        const smallImg = document.querySelectorAll(".small-img");
        
        if (MainImg && smallImg) {
            smallImg.forEach(img => {
                img.addEventListener('click', () => {
                    MainImg.src = img.src;
                });
            });
        }
    });
}