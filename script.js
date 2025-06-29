// Cursor personalizado
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power1.out"
    });
});

// Mostrar cursor después de un retraso
setTimeout(() => {
    gsap.to(cursor, {
        opacity: 1,
        duration: 0.5
    });
}, 500);

// Efectos hover
document.querySelectorAll('a, button, .lab-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 1.8,
            backgroundColor: "rgba(110, 69, 226, 0.5)",
            duration: 0.3
        });
    });
    
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "transparent",
            duration: 0.3
        });
    });
});

// Animaciones de scroll para las tarjetas
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.lab-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        x: i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8
    });
});

// Animaciones para el hero section
gsap.from(".title-animate", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3
});

gsap.from(".subtitle-animate", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.6
});

gsap.from("#cta-button", {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.9
});