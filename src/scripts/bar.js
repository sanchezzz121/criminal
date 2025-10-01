// Navbar shrink ao scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNav2');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar-toggler');

    toggleButton.addEventListener('click', function () {
        if (window.scrollY < 50) {
            window.scrollBy(0, 51 - window.scrollY);
        }
    });
});
