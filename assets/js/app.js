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
});