document.addEventListener('DOMContentLoaded', () => {
    const clickableElements = document.querySelectorAll('.clickable');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close-btn');

    clickableElements.forEach(element => {
        element.addEventListener('click', () => {
            const imagePath = element.getAttribute('data-image'); 
            modalImage.src = imagePath; 
            modal.classList.add('active'); 
        });
    });

    closeButton.addEventListener('click', () => {
        modal.classList.remove('active'); 
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('active'); 
        }
    });
});
