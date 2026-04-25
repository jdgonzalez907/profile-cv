/**
 * Profile Application
 * Minimal JS for small UI updates
 */

document.addEventListener('DOMContentLoaded', () => {
    // Update year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Theme Toggle Logic
    const toggleBtn = document.getElementById('theme-toggle');
    const iconElegant = document.getElementById('icon-elegant');
    const iconProgrammer = document.getElementById('icon-programmer');
    const htmlElement = document.documentElement;

    // Check saved preference
    const savedTheme = localStorage.getItem('profile-theme');
    if (savedTheme === 'programmer') {
        htmlElement.classList.add('theme-programmer');
        iconElegant.style.display = 'none';
        iconProgrammer.style.display = 'block';
    }

    toggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('theme-programmer');
        
        if (htmlElement.classList.contains('theme-programmer')) {
            localStorage.setItem('profile-theme', 'programmer');
            iconElegant.style.display = 'none';
            iconProgrammer.style.display = 'block';
        } else {
            localStorage.setItem('profile-theme', 'elegant');
            iconElegant.style.display = 'block';
            iconProgrammer.style.display = 'none';
        }
    });
});