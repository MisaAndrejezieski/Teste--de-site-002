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
let currentBackgroundIndex = 0;

// Função para carregar o fundo dinâmico
function loadBackground() {
    const background = document.body;
    currentBackgroundIndex = (currentBackgroundIndex % 12) + 1;
    const imageUrl = `images/a${currentBackgroundIndex.toString().padStart(3, '0')}.jpg`;
    background.style.backgroundImage = `url('${imageUrl}')`;
    background.style.backgroundSize = 'cover';
    background.style.backgroundPosition = 'center';
}

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

function loadCommunities() {
    const communitiesList = document.getElementById('communities-list');
    communitiesList.innerHTML = communities.map(community => `
        <div class="community">
            <h3>${community.name}</h3>
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
        document.getElementById('scrap-content').value = ''; // Limpa o campo
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
        document.getElementById('testimonial-content').value = ''; // Limpa o campo
    }
}

function createCommunity() {
    const name = document.getElementById('community-name').value;
    if (name) {
        const community = {
            id: communities.length + 1,
            name: name
        };
        communities.push(community);
        loadCommunities();
        document.getElementById('community-name').value = ''; // Limpa o campo
    }
}

// Event Listeners
document.getElementById('post-scrap-button').addEventListener('click', postScrap);
document.getElementById('post-testimonial-button').addEventListener('click', postTestimonial);
document.getElementById('create-community-button').addEventListener('click', createCommunity);

// Inicialização
window.addEventListener('load', () => {
    loadBackground();
    loadScraps();
    loadTestimonials();
    loadCommunities();
    setInterval(loadBackground, 5000); // Muda o fundo a cada 5 segundos
});
