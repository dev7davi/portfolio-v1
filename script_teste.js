    // Array de textos que queremos que apareçam como placeholder
    const placeholderTexts = [
        "       João da Silva Rocha",
        "       Buscando...",
        "       Buscando...",
        "       Buscando...",
    
    ];
    
    // Seleciona o campo de input
    const inputField = document.getElementById('inputField');
    
    // Verifica se o input existe antes de tentar executar o efeito
    if (inputField) {
        let index = 0; // Índice para o texto atual
        let charIndex = 0; // Índice para o caractere atual
        const typingSpeed = 85; // Velocidade da digitação (em milissegundos)
        const resetDelay = 300; // Tempo de espera antes de reiniciar a animação (1 segundo)
    
        // Função que adiciona o efeito de escrita no placeholder
        function typePlaceholder() {
            const currentText = placeholderTexts[index]; // Texto atual
            if (charIndex < currentText.length) {
                // Adiciona uma letra ao placeholder a cada intervalo
                inputField.placeholder += currentText.charAt(charIndex);
                charIndex++;
                setTimeout(typePlaceholder, typingSpeed); // Chama a função repetidamente até completar o texto
            } else {
                // Espera um tempo e reinicia a animação com o próximo nome
                setTimeout(() => {
                    inputField.placeholder = ""; // Limpa o placeholder
                    charIndex = 0; // Reseta o índice de caracteres
    
                    // Passa para o próximo nome no array, reiniciando se chegar ao final
                    index = (index + 1) % placeholderTexts.length;
    
                    // Reinicia a animação de escrita
                    typePlaceholder();
                }, resetDelay);
            }
        }
    
        // Inicia a animação de escrita
        typePlaceholder();
    }