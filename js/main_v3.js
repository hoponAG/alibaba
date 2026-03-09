document.addEventListener("DOMContentLoaded", () => {
    // Basic GSAP Setup
    gsap.registerPlugin(ScrollTrigger);

    // Header Intro
    gsap.from(".header-v3", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.2
    });

    // Hero Sequence
    const tlHero = gsap.timeline();
    tlHero.from(".hero-text-box", {
        scale: 0.5,
        opacity: 0,
        rotation: -10,
        duration: 1.2,
        ease: "back.out(1.5)",
        delay: 0.5
    })
        .from(".mascot-wrapper", {
            x: 200,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        }, "-=0.8")
        .from(".floating-food", {
            scale: 0,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.5)"
        }, "-=1");

    // About Secton (Peeking mascot and text)
    gsap.from(".mascot-peeking", {
        scrollTrigger: {
            trigger: ".about-v3",
            start: "top 75%",
        },
        y: 100,
        opacity: 0,
        rotation: 10,
        duration: 1,
        ease: "back.out(1.2)"
    });

    gsap.from(".speech-bubble", {
        scrollTrigger: {
            trigger: ".about-v3",
            start: "top 75%",
        },
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "back.out(1.5)",
        transformOrigin: "bottom left"
    });

    gsap.from(".about-info > *", {
        scrollTrigger: {
            trigger: ".about-v3",
            start: "top 70%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Menu Cards (Fun Pop Up)
    gsap.from(".fun-card", {
        scrollTrigger: {
            trigger: ".menu-highlights-v3",
            start: "top 75%",
        },
        y: 80,
        opacity: 0,
        rotation: (index) => (index % 2 === 0 ? -5 : 5),
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.2)"
    });

    // Polaroids
    gsap.from(".polaroid", {
        scrollTrigger: {
            trigger: ".gallery-v3",
            start: "top 75%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1)"
    });

    // Reviews Bubbles
    gsap.from(".review-bubble", {
        scrollTrigger: {
            trigger: ".reviews-v3",
            start: "top 70%",
        },
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.5)"
    });

    // Review Mascot slides in
    gsap.from(".review-mascot", {
        scrollTrigger: {
            trigger: ".reviews-v3",
            start: "bottom bottom",
        },
        x: 200,
        opacity: 0,
        rotation: -20,
        duration: 1.5,
        ease: "power3.out"
    });

    // Interactive Logo in Header
    const logoBlock = document.querySelector('.logo-area');
    if (logoBlock) {
        logoBlock.addEventListener('mouseenter', () => {
            gsap.to(".logo-text", { scale: 1.1, rotation: 2, duration: 0.2, ease: "power1.out" });
        });
        logoBlock.addEventListener('mouseleave', () => {
            gsap.to(".logo-text", { scale: 1, rotation: 0, duration: 0.2, ease: "power1.out" });
        });
    }

});
