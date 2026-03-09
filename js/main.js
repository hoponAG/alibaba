document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    // 1. Initial Hero entry
    tl.from(".subtext", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
    })
        .from(".hero-title", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        }, "-=0.6")
        .from(".hero-desc", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.8")
        .from(".btn-discover", {
            scale: 0.5,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "-=0.6");

    // 2. Main Logo Entry
    tl.from(".main-hero-logo", {
        scale: 0.5,
        opacity: 0,
        rotation: 15,
        duration: 1.5,
        ease: "back.out(1.2)"
    }, "-=1.2");

    // 3. Parallax for Logo and About Vector
    gsap.to(".main-hero-logo", {
        yPercent: -10,
        rotation: "-=5",
        ease: "none",
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.to(".about-vector-bg", {
        yPercent: 30,
        rotation: "+=15",
        ease: "none",
        scrollTrigger: {
            trigger: ".about-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // 4. Fade in Sections on Scroll
    const defaultScrollSettings = {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    };

    gsap.from(".about-grid > *", {
        ...defaultScrollSettings,
        stagger: 0.2,
        scrollTrigger: { trigger: ".about-section", start: "top 70%" }
    });

    gsap.from(".photo-grid img", {
        ...defaultScrollSettings,
        scale: 0.9,
        stagger: 0.1,
        scrollTrigger: { trigger: ".gallery-section", start: "top 70%" }
    });

    gsap.from(".review-card", {
        ...defaultScrollSettings,
        y: 80,
        stagger: 0.15,
        scrollTrigger: { trigger: ".reviews-section", start: "top 75%" }
    });

    gsap.from(".contact-grid > *", {
        ...defaultScrollSettings,
        stagger: 0.2,
        scrollTrigger: { trigger: ".contact-section", start: "top 80%" }
    });

    // 5. Fullscreen Nav Toggle logic
    const menuToggle = document.getElementById('menuToggle');
    const fullNav = document.getElementById('fullNav');
    const navLinks = document.querySelectorAll('.fullscreen-nav a');

    menuToggle.addEventListener('click', () => {
        fullNav.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            fullNav.classList.remove('open');
        });
    });

    // 6. Menu Tabs Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.menu-tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active to clicked
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            // Re-trigger GSAP animation slightly for effect (Optional, but looks nice)
            gsap.fromTo(`#${targetId} .menu-item`, {
                y: 20, opacity: 0
            }, {
                y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out"
            });
        });
    });

    // Initial animation for first tab
    gsap.from("#broodjes-durum .menu-item", {
        y: 20, opacity: 0, duration: 0.4, stagger: 0.05, ease: "power2.out",
        scrollTrigger: { trigger: ".menu-section", start: "top 60%" }
    });
});
