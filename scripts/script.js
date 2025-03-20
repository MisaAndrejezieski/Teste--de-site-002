let currentPageIndex = 0;
const pages = document.querySelectorAll('.page');
const background = document.querySelector('.background');
const navLinks = document.querySelectorAll('.nav-link');
const imageGrid = document.getElementById('image-grid');
const uploadSection = document.getElementById('upload-section');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const uploadForm = document.getElementById('upload-form');
let isAdmin = false; // Controle de permissão de administrador

// Função para mostrar a página atual
function showPage(index) {
    pages.forEach((page, i) => {
        if (i === index) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
    navLinks.forEach((link, i) => {
        if (i === index) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Função para carregar imagens de fundo dinamicamente
function loadBackground() {
    const imageNumber = (currentPageIndex % 12) + 1; // Alterna entre 12 imagens
    const imageUrl = `images/a${imageNumber.toString().padStart(3, '0')}.jpg`;
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
        background.style.backgroundImage = `url('${imageUrl}')`;
    };
}

// Função para carregar imagens na galeria
function loadGallery() {
    // Simulação de imagens carregadas dinamicamente
    const images = [
        'images/a001.jpg',
        'images/a002.jpg',
        'images/a003.jpg',
        // Adicione mais imagens aqui
    ];
    imageGrid.innerHTML = images.map(img => `<img src="${img}" alt="Imagem">`).join('');
}

// Controle de scroll personalizado
window.addEventListener('wheel', (e) => {
    const isScrollingDown = e.deltaY > 0;
    currentPageIndex = Math.min(Math.max(currentPageIndex + (isScrollingDown ? 1 : -1), pages.length - 1);
    showPage(currentPageIndex);
    loadBackground();
});

// Suporte para dispositivos touch
let startY;
window.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});
window.addEventListener('touchend', (e) => {
    const endY = e.changedTouches[0].clientY;
    const deltaY = startY - endY;
    if (Math.abs(deltaY) > 50) {
        currentPageIndex = Math.min(Math.max(currentPageIndex + (deltaY > 0 ? 1 : -1), pages.length - 1));
        showPage(currentPageIndex);
        loadBackground();
    }
});

// Navegação pelo menu
navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentPageIndex = index;
        showPage(currentPageIndex);
        loadBackground();
    });
});

// Simulação de login (substitua por uma API real)
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    // Verifique as credenciais (exemplo simples)
    if (email === 'admin@example.com' && password === 'admin123') {
        isAdmin = true;
        uploadSection.style.display = 'block';
        alert('Login bem-sucedido!');
    } else {
        alert('Credenciais inválidas.');
    }
});

// Simulação de criação de conta (substitua por uma API real)
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    // Salve os dados do usuário (exemplo simples)
    alert('Conta criada com sucesso!');
});

// Simulação de upload de imagem (substitua por uma API real)
uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('image-upload');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            imageGrid.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

// Inicialização
window.addEventListener('load', () => {
    showPage(currentPageIndex);
    loadBackground();
    loadGallery();
});
