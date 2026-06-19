// ========================================
// STARS ROLEPLAY 3D EFFECT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // HERO CARD 3D
    // =========================

    const card = document.querySelector(".hero-card");

    if(card){

        document.addEventListener("mousemove", (e) => {

            const x =
            (window.innerWidth / 2 - e.clientX) / 25;

            const y =
            (window.innerHeight / 2 - e.clientY) / 25;

            card.style.transform =
            `
            perspective(1200px)
            rotateY(${x}deg)
            rotateX(${-y}deg)
            scale3d(1.03,1.03,1.03)
            `;
        });

        document.addEventListener("mouseleave", () => {

            card.style.transform =
            `
            perspective(1200px)
            rotateY(0deg)
            rotateX(0deg)
            scale3d(1,1,1)
            `;
        });

    }

    // =========================
    // FLOATING LOGO
    // =========================

    const logo = document.querySelector(".logo");

    if(logo){

        let angle = 0;

        function animateLogo(){

            angle += 0.02;

            logo.style.transform =
            `
            translateY(${Math.sin(angle) * 15}px)
            rotateY(${Math.sin(angle) * 15}deg)
            `;

            requestAnimationFrame(animateLogo);
        }

        animateLogo();
    }

    // =========================
    // PARTICLE SYSTEM
    // =========================

    for(let i = 0; i < 60; i++){

        const particle =
        document.createElement("div");

        particle.className = "particle";

        particle.style.position = "fixed";
        particle.style.width = "4px";
        particle.style.height = "4px";
        particle.style.borderRadius = "50%";
        particle.style.background = "#00e5ff";
        particle.style.boxShadow =
        "0 0 10px #00e5ff";

        particle.style.left =
        Math.random() * 100 + "vw";

        particle.style.top =
        Math.random() * 100 + "vh";

        particle.style.pointerEvents = "none";
        particle.style.zIndex = "-1";

        document.body.appendChild(particle);

        let speed =
        Math.random() * 0.5 + 0.2;

        function animateParticle(){

            let currentTop =
            parseFloat(particle.style.top);

            currentTop -= speed;

            if(currentTop < -5){

                currentTop = 100;

                particle.style.left =
                Math.random() * 100 + "vw";
            }

            particle.style.top =
            currentTop + "vh";

            requestAnimationFrame(
                animateParticle
            );
        }

        animateParticle();
    }

    // =========================
    // BUTTON GLOW
    // =========================

    document
    .querySelectorAll(".btn-glow")
    .forEach(button => {

        button.addEventListener(
        "mouseenter", () => {

            button.style.boxShadow =
            `
            0 0 20px #00e5ff,
            0 0 40px #00e5ff,
            0 0 60px #00e5ff
            `;
        });

        button.addEventListener(
        "mouseleave", () => {

            button.style.boxShadow = "none";
        });

    });

    // =========================
    // SCROLL REVEAL
    // =========================

    const observer =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                "translateY(0px)";
            }

        });

    });

    document
    .querySelectorAll(".reveal")
    .forEach(el=>{

        el.style.opacity = "0";
        el.style.transform =
        "translateY(50px)";
        el.style.transition =
        "all 0.8s ease";

        observer.observe(el);
    });

});
