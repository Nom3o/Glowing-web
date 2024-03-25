document.addEventListener('DOMContentLoaded', (event) => {
    const carElement = document.querySelector('.glowing-box');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            let color = window.getComputedStyle(button).backgroundColor;
            carElement.style.backgroundColor = color;
            carElement.textContent = color; 
            carElement.style.color = color;
        });
    });
});

document.querySelector('.rand').addEventListener('click', function() {
    document.querySelector('h1').textContent = "Don't 4get 2 😁";
});
