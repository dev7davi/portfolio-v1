    // Função para detectar a rolagem e aplicar a classe "scrolled"
    function handleScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight - 110) {  // 150px de margem antes de ativar
                element.classList.add('scrolled1');
            } else {
                element.classList.remove('scrolled1'); // Opcional: remover classe ao rolar para fora
            }
        });
    }

    // Escuta o evento de rolagem
    window.addEventListener('scroll', handleScroll);
    
    // Executa a função ao carregar a página para verificar elementos que já estão visíveis
        window.addEventListener('load', handleScroll);

        // -----------------------------------------

        // ---------------------------------
   

// --------------------------------------