document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", function() {
      mobileMenu.classList.toggle("hidden");
    });

    closeButton.addEventListener("click", function() {
      mobileMenu.classList.toggle("hidden");
    })
    }
);
