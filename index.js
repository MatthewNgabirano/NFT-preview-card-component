
document.addEventListener('DOMContentLoaded', () => {
    const imageUp = document.querySelector('.image-up');

    imageUp.addEventListener('click', () => {
        imageUp.classList.toggle('clicked');
    });
});
