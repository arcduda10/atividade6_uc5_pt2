// Função para realizar a busca dos produtos

function searchProducts() {
    var input, filter, cards, cardTitle, i, txtValue;
    input = document.querySelector('.search-bar input'); // Seleciona o campo de entrada da barra de pesquisa
    filter = input.value.toUpperCase(); // Obtém o valor da pesquisa em maiúsculas
    cards = document.getElementsByClassName('gallery-item'); // Seleciona todos os itens da galeria

    // Loop através de todos os itens da galeria
    for (i = 0; i < cards.length; i++) {
        cardTitle = cards[i].getElementsByClassName('card-title')[0]; // Seleciona o título do cartão
        txtValue = cardTitle.textContent || cardTitle.innerText; // Obtém o texto do título

        // Verifica se o título contém o texto da pesquisa
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = ""; // Exibe o item se a pesquisa corresponder
        } else {
            cards[i].style.display = "none"; // Oculta o item se não corresponder
        }
    }
}

// Adiciona um evento de entrada à barra de pesquisa
document.querySelector('.search-bar input').addEventListener('input', searchProducts);


// POPUP 

// Função para abrir o popup de perfil
function openProfilePopup() {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    
    // Definindo o conteúdo do popup para o perfil
    popupMessage.innerHTML = `
        <h3>Perfil</h3>
        <p><a href="recomecos_login.html">Ir para a página de login!</a></p>
    `;
    
    // Exibindo o popup
    popup.style.display = 'flex';
}

// Função para abrir o popup de mensagens
function openMessagePopup() {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    
    // Definindo o conteúdo do popup para mensagens
    popupMessage.innerHTML = `
        <h3>Contato</h3>
        <p>E-mail: xxxxxxxxx@xxxx.com</p>
        <p>Telefone: (xx)xxxxx-xxx</p>
        <p>Redes sociais: xxxx - xxxx - xxxx</p>
        <p>Endereço: X. xxxx, y, xx</p>
    `;
    
    // Exibindo o popup
    popup.style.display = 'flex';
}

// Função para fechar o popup
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-btn');
    const popup = document.getElementById('popup');

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Fechar o popup ao clicar fora do conteúdo
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});