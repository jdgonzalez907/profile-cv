/**
 * Profile Application
 * Logic to fetch and render professional profile from JSON
 */

async function init() {
    try {
        const response = await fetch('assets/data/profile.json');
        if (!response.ok) throw new Error('Could not load profile data');
        
        const data = await response.json();
        renderProfile(data);
    } catch (error) {
        console.error('Error initializing profile:', error);
        document.getElementById('app').innerHTML = `<p class="error">Error al cargar la información: ${error.message}</p>`;
    }
}

function renderProfile(data) {
    const { basics, work, awards } = data;

    // Basic Info
    const nameEl = document.getElementById('name');
    nameEl.textContent = basics.name;
    nameEl.classList.remove('loading-placeholder');

    const labelEl = document.getElementById('label');
    labelEl.textContent = basics.label;
    labelEl.classList.remove('loading-placeholder');

    document.getElementById('summary').textContent = basics.summary;

    // Work Experience
    const workContainer = document.getElementById('work');
    workContainer.innerHTML = work.map(job => `
        <div class="item">
            <div class="item-header">
                <span class="item-title">${job.position}</span>
                <span class="item-date">${formatDate(job.startDate)} — ${job.endDate ? formatDate(job.endDate) : 'Presente'}</span>
            </div>
            <div class="item-org">${job.name}</div>
            <p class="item-summary">${job.summary}</p>
            ${job.highlights.length ? `
                <ul class="highlights">
                    ${job.highlights.map(h => `<li class="highlight-tag">${h}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `).join('');

    // Awards
    const awardsContainer = document.getElementById('awards');
    awardsContainer.innerHTML = awards.map(award => `
        <div class="item">
            <div class="item-header">
                <span class="item-title">${award.title}</span>
                <span class="item-date">${formatDate(award.date)}</span>
            </div>
            <div class="item-org">${award.awarder}</div>
            <p class="item-summary">${award.summary}</p>
        </div>
    `).join('');

    // Contact & Footer
    const contactLinks = document.getElementById('contact-links');
    contactLinks.innerHTML = basics.profiles.map(p => `
        <a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.network}</a>
    `).join('');

    document.getElementById('year').textContent = new Date().getFullYear();
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'short'
    });
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
