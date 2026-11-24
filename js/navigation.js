// ========================================
// NGN845 | By Nima
// PAGE NAVIGATION
// ========================================

function showPage(pageId) {

    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.querySelectorAll('nav button').forEach(button => {
        button.classList.remove('active');
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add('active');
    }

    const navButton = document.querySelector(
        'nav button[data-page="' + pageId + '"]'
    );

    if (navButton) {
        navButton.classList.add('active');
    }

    history.replaceState(null, '', '#' + pageId);

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// ========================================
// PROJECT NAVIGATION
// ========================================

function showProjectView(viewId) {

    document.querySelectorAll('#projects .subpage').forEach(view => {
        view.classList.remove('active');
    });

    const selected = document.getElementById(
        viewId === 'main' ? 'projectsMain' : viewId
    );

    if (selected) {
        selected.classList.add('active');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
