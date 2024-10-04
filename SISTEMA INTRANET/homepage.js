// Função para alternar o estado do card
function toggleCard(buttonId, cardSelector) {
    var button = document.getElementById(buttonId);
    var card = document.querySelector(cardSelector);

    button.addEventListener('click', function() {
        card.classList.toggle('active');
        if (card.classList.contains('active')) {
            button.textContent = 'Read less';
        } else {
            button.textContent = 'Read more';
        }
    });
}

// Aplicando para todos os 6 cards
toggleCard('read_button_1', '.card:nth-child(1)');
toggleCard('read_button_2', '.card:nth-child(2)');
toggleCard('read_button_3', '.card:nth-child(3)');
toggleCard('read_button_4', '.card:nth-child(4)');
toggleCard('read_button_5', '.card:nth-child(5)');
toggleCard('read_button_6', '.card:nth-child(6)');



function menuShow() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active'); // Adiciona ou remove a classe active para mostrar/ocultar o menu
}
