// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavigation = document.getElementById('main-navigation');

    if (menuToggle && mainNavigation) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            
            // 1. Alterna o estado de acessibilidade
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            // 2. Adiciona/Remove a classe 'is-open' na navegação
            // Esta classe 'is-open' é o que o seu CSS usa para mostrar/esconder o menu
            mainNavigation.classList.toggle('is-open'); 
        });
    }
});
--- Funções de Ajuda ---

    // 1. Atualiza a posição do carrossel
    const updateSlidePosition = () => {
        slide.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
        updateIndicators();
    };

    // 2. Cria os indicadores (pontos)
    const createIndicators = () => {
        images.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (index === 0) {
                indicator.classList.add('active');
            }
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateSlidePosition();
                resetAutoPlay();
            });
            indicatorsContainer.appendChild(indicator);
        });
    };

    // 3. Atualiza qual indicador está ativo
    const updateIndicators = () => {
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex) {
                indicator.classList.add('active');
            }
        });
    };

    // --- Funções de Navegação ---

    const goToNext = () => {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        updateSlidePosition();
    };

    const goToPrev = () => {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        updateSlidePosition();
    };

    // --- Auto-Play ---

    const startAutoPlay = () => {
        // Roda a cada 3000 milissegundos (3 segundos)
        autoPlayInterval = setInterval(goToNext, 3000); 
    };

    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    };

    // --- Event Listeners e Inicialização ---

    // Define a largura correta (caso a janela seja redimensionada)
    window.addEventListener('resize', () => {
        slideWidth = images[0].clientWidth;
        updateSlidePosition(); // Reposiciona o slide após o redimensionamento
    });

    // Eventos dos Botões
    nextBtn.addEventListener('click', () => {
        goToNext();
        resetAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        goToPrev();
        resetAutoPlay();
    });

    // Inicia o carrossel
    createIndicators();
    startAutoPlay();
});
