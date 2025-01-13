document.addEventListener('DOMContentLoaded', function() {
    const menuCloseBtn = document.getElementById('mobile-menu-closer');
    const mobileMenuOpener = document.getElementById('mobile-menu-opener');
    const mobMenu = document.getElementById('mob-menu');

    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', function() {
            mobMenu.classList.remove('is-open');
        });
    }

    if (mobileMenuOpener) {
        mobileMenuOpener.addEventListener('click', function() {
            mobMenu.classList.add('is-open');
        });
    }
});
