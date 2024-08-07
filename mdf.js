// Função para criar o efeito parallax com o movimento do mouse
function mouseParallaxEffect() {
    const elements = document.querySelectorAll('.lua img, .base img, .telhado img, .nome img, .local img');

    window.addEventListener('mousemove', (event) => {
        const { clientX: mouseX, clientY: mouseY } = event;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        elements.forEach((element) => {
            const speed = element.getAttribute('data-speed') || 0.5; // velocidade do efeito parallax
            const rect = element.getBoundingClientRect();
            const elementX = rect.left + rect.width / 10;
            const elementY = rect.top + rect.height / 10;

            const deltaX = (mouseX - elementX) / windowWidth;
            const deltaY = (mouseY - elementY) / windowHeight;

            const translateX = deltaX * speed * 20; // ajuste a multiplicação para o efeito desejado
            const translateY = deltaY * speed * 20;

            element.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    });
}

// Função para animar as folhas da esquerda para a direita
function animateFolhas() {
    const folhasCima = document.querySelectorAll('.folha-cima img');
    const folhasMeio = document.querySelectorAll('.folha-meio img');
    const folhasBaixo = document.querySelectorAll('.folha-baixo img');
    const todasFolhas = [...folhasCima, ...folhasMeio, ...folhasBaixo]; // Junta todas as folhas

    todasFolhas.forEach(folha => {
        // Gera uma duração aleatória entre 10s e 30s
        const duration = Math.random() * 20 + 10;
        folha.style.animation = `moveRight ${duration}s linear infinite`;
        folha.style.left = `${Math.random() * -100}vw`; // Posiciona as folhas aleatoriamente fora da tela à esquerda
        folha.style.top = `${Math.random() * 100}vh`; // Posiciona as folhas aleatoriamente na vertical
    });
}

// Inicia o efeito parallax e a animação das folhas
document.addEventListener('DOMContentLoaded', () => {
    mouseParallaxEffect();

    // Adiciona a rotação contínua para a Lua
    const luaImg = document.querySelector('.lua img');
    if (luaImg) {
        luaImg.classList.add('rotate');
    }

    // Inicia a animação das folhas
    animateFolhas();
});
