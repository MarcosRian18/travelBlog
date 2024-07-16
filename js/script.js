document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeButton = document.getElementById("closeButton");

    menuButton.addEventListener("click", function () {
        mobileMenu.style.display = "flex";
    });

    closeButton.addEventListener("click", function () {
        mobileMenu.style.display = "none";
    });
});
