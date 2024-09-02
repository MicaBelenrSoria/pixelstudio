document.addEventListener('DOMContentLoaded', function() {
    const dotsContainer = document.querySelector('.dots');
    const numberOfDots = 100;

    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.top = `${Math.random() * 100}vh`;
        dot.style.left = `${Math.random() * 100}vw`;
        dot.style.animationDelay = `${Math.random() * 5}s`;
        dot.style.animationDuration = `${10 + Math.random() * 10}s`;
        dotsContainer.appendChild(dot);
    }
});