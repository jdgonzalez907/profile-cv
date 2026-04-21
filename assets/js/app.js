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

    // Ordenar trabajos por fecha de inicio (más reciente primero)
    const sortedWork = [...work].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

    // Encontrar trabajo actual (el primero sin endDate o simplemente el primero de la lista ordenada)
    const currentJob = sortedWork.find(job => !job.endDate) || sortedWork[0];

    // Foto de perfil
    const hero = document.querySelector('.hero');
    if (basics.image) {
        const img = document.createElement('img');
        img.src = basics.image;
        img.alt = basics.name;
        img.classList.add('profile-photo');
        hero.prepend(img);
    }

    // Basic Info
    const nameEl = document.getElementById('name');
    nameEl.textContent = basics.name;
    nameEl.classList.remove('loading-placeholder');

    const labelEl = document.getElementById('label');
    labelEl.textContent = `${basics.label} @ ${currentJob.name}`;
    labelEl.classList.remove('loading-placeholder');

    // Ubicación
    if (basics.location) {
        const locationEl = document.createElement('p');
        locationEl.className = 'location';
        locationEl.textContent = `${basics.location.city}, ${basics.location.region}`;
        hero.appendChild(locationEl);
    }

    document.getElementById('summary').textContent = basics.summary;

    // Work Experience
    const workContainer = document.getElementById('work');
    workContainer.innerHTML = sortedWork.map(job => {
        const isCurrent = !job.endDate;
        return `
            <div class="item ${isCurrent ? 'current-job' : ''}">
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
        `;
    }).join('');

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
    const profilesHtml = basics.profiles.map(p => `
        <a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.network}</a>
    `).join('');
    
    const emailHtml = basics.email ? `<a href="mailto:${basics.email}">Email</a>` : '';
    contactLinks.innerHTML = `${profilesHtml} ${emailHtml}`;

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
