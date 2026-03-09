document.addEventListener("DOMContentLoaded", () => {
    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }

    // Intro Loader Animation
    const loaderTL = gsap.timeline();
    loaderTL.to(".loader-text", {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        ease: "power4.in",
        delay: 0.5
    })
        .to(".loader-v2", {
            y: "-100%",
            duration: 1,
            ease: "power4.inOut"
        }, "-=0.5")
        .set("body", { className: "-loading" }, "-=1") // remove loading
        .from(".marquee-huge", {
            opacity: 0,
            y: 100,
            duration: 1.5,
            stagger: 0.2,
            ease: "power4.out"
        }, "-=0.5")
        .from(".floating-schotel", {
            scale: 0.1,
            opacity: 0,
            rotation: 45,
            duration: 2,
            ease: "back.out(1.5)"
        }, "-=1.5")
        .from(".hero-bottom", {
            y: 50,
            opacity: 0,
            duration: 1
        }, "-=1");

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero Marquee Parallax (Opposite Directions)
    gsap.to(".marquee-huge:not(.reverse)", {
        x: "-20vw",
        ease: "none",
        scrollTrigger: {
            trigger: ".hero-v2",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });
    gsap.to(".marquee-huge.reverse", {
        x: "20vw",
        ease: "none",
        scrollTrigger: {
            trigger: ".hero-v2",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

    // Intro Parallax
    gsap.to(".bg-vector", {
        yPercent: 30,
        rotation: 15,
        ease: "none",
        scrollTrigger: {
            trigger: ".intro-v2",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // Menu Category Marquees (Continuous scroll effect)
    const catMarquees = document.querySelectorAll('.marquee-cat div');
    catMarquees.forEach((m) => {
        gsap.to(m, {
            x: "-50%",
            ease: "none",
            scrollTrigger: {
                trigger: m.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 2
            }
        });
    });

    // Cat Items Fade In
    const catSections = document.querySelectorAll('.menu-cat-v2');
    catSections.forEach(section => {
        const items = section.querySelectorAll('.c-item');
        if (items.length > 0) {
            gsap.from(items, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%"
                }
            });
        }
    });

    // Sfeer Horizontal Scroll Setup
    // Ensure the container width is wide enough
    const hContainer = document.querySelector('.h-scroll-container');
    if (hContainer) {
        gsap.to(hContainer, {
            x: () => -(hContainer.scrollWidth - window.innerWidth + window.innerWidth * 0.1) + "px",
            ease: "none",
            scrollTrigger: {
                trigger: ".sfeer-v2",
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: true, // PIN the section while scrolling horizontally
                anticipatePin: 1
            }
        });
    }

});
