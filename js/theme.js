// ========================================
// NGN845 | By Nima
// THEME SYSTEM
// ========================================

const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {

    document.documentElement.setAttribute('data-theme', theme);

    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';

        themeToggle.title = theme === 'dark'
            ? 'تغییر به حالت روشن'
            : 'تغییر به حالت تاریک';
    }

    const themeColor = document.querySelector(
        'meta[name="theme-color"]'
    );

    if (themeColor) {
        themeColor.content = theme === 'dark'
            ? '#080808'
            : '#f3f4f7';
    }

    localStorage.setItem('ngn845-theme', theme);
}

function toggleTheme() {

    const currentTheme =
        document.documentElement.getAttribute('data-theme');

    const newTheme = currentTheme === 'dark'
        ? 'light'
        : 'dark';

    applyTheme(newTheme);
}


// Load saved theme
const savedTheme = localStorage.getItem('ngn845-theme');

applyTheme(savedTheme === 'light' ? 'light' : 'dark');
