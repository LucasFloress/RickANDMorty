document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                mainNav.classList.toggle('active');
            }
        });
    }
});
