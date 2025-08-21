// static/js/scroll-animations.js

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Opcional: para a observação depois de animar
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.5 }); // O elemento deve estar 50% visível para a animação começar

document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});