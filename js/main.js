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
