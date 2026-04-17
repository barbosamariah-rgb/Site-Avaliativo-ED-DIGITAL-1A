// 1. GESTÃO DE DADOS (DATA LAYER)
const dadosPilares = [
    { title: "Ecológico", desc: "Preservação da biodiversidade e redução da pegada de carbono." },
    { title: "Social", desc: "Equidade, justiça social e melhoria da qualidade de vida." },
    { title: "Econômico", desc: "Crescimento sustentável sem esgotar recursos naturais." }
];

const dadosFAQ = [
    { q: "O que é a Agenda 2030?", a: "É um plano de ação global da ONU com 17 objetivos para o desenvolvimento sustentável." },
    { q: "Como posso ajudar?", a: "Reduzindo o consumo de plástico, economizando energia e apoiando o comércio local." }
];

// 2. RENDERIZAÇÃO DINÂMICA
function init() {
    const grid = document.getElementById('grid-pilares');
    const accordion = document.getElementById('accordion-container');

    // Renderizar Cards
    dadosPilares.forEach(pilar => {
        grid.innerHTML += `
            <article class="card scroll-reveal">
                <h3>${pilar.title}</h3>
                <p>${pilar.desc}</p>
            </article>
        `;
    });

    // Renderizar Acordeão
    dadosFAQ.forEach((item, index) => {
        accordion.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header" onclick="toggleAccordion(${index})" aria-expanded="false">
                    ${item.q} <span>+</span>
                </button>
                <div class="accordion-content" id="content-${index}">
                    <p>${item.a}</p>
                </div>
            </div>
        `;
    });

    setupScrollReveal();
}

// 3. ACESSIBILIDADE: TAMANHO DA FONTE
let currentFontSize = 100;
function changeFontSize(action) {
    currentFontSize += (action === 'increase' ? 10 : -10);
    document.documentElement.style.fontSize = `${currentFontSize}%`;
}

// 4. MODO ALTO CONTRASTE
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// 5. COMPONENTES: ACORDEÃO
function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    const headers = document.querySelectorAll('.accordion-header');
    
    contents[index].classList.toggle('active');
    const isActive = contents[index].classList.contains('active');
    headers[index].setAttribute('aria-expanded', isActive);
}

// 6. SCROLL REVEAL (INTERSECTION OBSERVER)
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

window.onload = init;
