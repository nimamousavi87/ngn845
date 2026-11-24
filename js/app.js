// ========================================
// NGN845 | By Nima
// MAIN APPLICATION
// ========================================

window.addEventListener('load', () => {

    const page = location.hash.replace('#', '');

    const validPages = [
        'home',
        'projects',
        'vpn',
        'contact'
    ];

    if (validPages.includes(page)) {
        showPage(page);
    }

    console.log('NGN845 | By Nima is ready!');

});
