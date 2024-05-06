document.addEventListener('DOMContentLoaded', function() {
    // Encontrar todos os botões "Detalhes"
    var detailButtons = document.querySelectorAll('.open-modal');

    // Encontrar o modal e o botão de fechar
    var modal = document.getElementById('myModal');
    var closeModal = document.querySelector('.close');

    // Adicionar um evento de clique a cada botão "Detalhes"
    detailButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Encontre o conteúdo do card clicado
            var cardDetails = this.parentNode.querySelector('.card-details').innerHTML;
            // Defina o conteúdo do modal como o conteúdo do card clicado
            document.getElementById('modalContent').innerHTML = cardDetails;
            // Exiba o modal
            modal.style.display = 'block';
        });
    });

    // Quando o usuário clicar no botão de fechar, feche o modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Quando o usuário clicar fora do modal, feche-o
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});