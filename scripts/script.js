// Dados simulados
let currentUser = {
    id: 1,
    name: "Fulano",
    bio: "Olá, eu sou o Fulano!",
    scraps: [],
    testimonials: [],
    communities: []
};

let scraps = [];
let testimonials = [];
let communities = [];

// Funções para carregar dados
function loadScraps() {
    const scrapsFeed = document.getElementById('scraps-feed');
    scrapsFeed.innerHTML = scraps.map(scrap => `
        <div class="scrap">
            <h3>${scrap.user}</h3>
            <p>${scrap.content}</p>
        </div>
    `).join('');
}

function loadTestimonials() {
    const testimonialsList = document.getElementById('testimonials-list');
    testimonialsList.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial">
            <h3>${testimonial.user}</h3>
            <p>${testimonial.content}</p>
        </div>
    `).join('');
}

// Funções para interações
function postScrap() {
    const content = document.getElementById('scrap-content').value;
    if (content) {
        const scrap = {
            id: scraps.length + 1,
            user: currentUser.name,
            content: content
        };
        scraps.push(scrap);
        loadScraps();
    }
}

function postTestimonial() {
    const content = document.getElementById('testimonial-content').value;
    if (content) {
        const testimonial = {
            id: testimonials.length + 1,
            user: currentUser.name,
            content: content
        };
        testimonials.push(testimonial);
        loadTestimonials();
    }
}

// Event Listeners
document.getElementById('post-scrap-button').addEventListener('click', postScrap);
document.getElementById('post-testimonial-button').addEventListener('click', postTestimonial);

// Inicialização
window.addEventListener('load', () => {
    loadScraps();
    loadTestimonials();
});
