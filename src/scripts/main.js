document.addEventListener('DOMContentLoaded', function() {

    var detailButtons = document.querySelectorAll('.open-modal');


    var modal = document.getElementById('myModal');
    var closeModal = document.querySelector('.close');

    detailButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var cardDetails = this.parentNode.querySelector('.card-details').innerHTML;
            document.getElementById('modalContent').innerHTML = cardDetails;
            modal.style.display = 'block';
        });
    });


    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});