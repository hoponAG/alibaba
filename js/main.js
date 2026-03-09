document.addEventListener("DOMContentLoaded", () => {
    // Basic GSAP Setup
    gsap.registerPlugin(ScrollTrigger);

    // Initial Navbar Animation
    gsap.from(".pill-nav-v4", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
    });

    // Hero GSAP Sequencer
    const tl = gsap.timeline();
    tl.from(".hero-bg-text", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
    })
        .from(".hero-left > *", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=1")
        .from(".layered-image-container", {
            x: 100,
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            ease: "back.out(1.2)"
        }, "-=0.8")
        .from(".main-float-img", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.5)"
        }, "-=0.5")
        .from(".secondary-float-img", {
            scale: 0,
            opacity: 0,
            rotation: 20,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.2")
        .from(".floating-circle-badge", {
            scale: 0,
            opacity: 0,
            rotation: -45,
            duration: 0.6,
            ease: "back.out(2)"
        }, "-=0.4");

    // Scroll Triggers - About
    gsap.from(".about-v4 .section-title, .about-v4 .section-subtitle, .about-v4 .body-text", {
        scrollTrigger: {
            trigger: ".about-v4",
            start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    // Arches (Features) Entrance
    gsap.from(".arch-box", {
        scrollTrigger: {
            trigger: ".features-arches",
            start: "top 80%",
        },
        y: 80,
        opacity: 0,
        rotation: (index) => (index % 2 === 0 ? 5 : -5),
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.2)"
    });

    // Menu Pill Tabs Logic
    const tabs = document.querySelectorAll('.pill-tab');
    const contents = document.querySelectorAll('.menu-cat-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active to current
            tab.classList.add('active');
            const targetId = `cat-${tab.getAttribute('data-cat')}`;
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
                // Optional: Scroll to top of menu container on switch for mobile clarity
                // targetContent.parentElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Enter Menu Animation - Removed stagger to keep tabs stable
    // Previously: gsap.from(".menu-pill-tabs .pill-tab", { ... })

    // Reviews Entrance
    gsap.from(".r-box", {
        scrollTrigger: {
            trigger: ".reviews-v4",
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Mobile Toggle Logic
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');

            // Prevent scrolling when menu is open
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    // Close menu when link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (mobileToggle.classList.contains('active')) {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Footer Elements
    gsap.from(".footer-grid-layout > *", {
        scrollTrigger: {
            trigger: ".footer-v4",
            start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
    });

});
