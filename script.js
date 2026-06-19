document.addEventListener("DOMContentLoaded",()=>{

const playBtn = document.getElementById("playBtn");

if(playBtn){

    playBtn.addEventListener("click", () => {

        const loading =
        document.getElementById("loadingScreen");

        const progress =
        document.getElementById("progress");

        const percent =
        document.getElementById("percent");

        loading.style.display = "flex";

        let value = 0;

        const interval = setInterval(() => {

            value++;

            progress.style.width =
            value + "%";

            percent.innerText =
            value + "%";

            if(value >= 100){

                clearInterval(interval);

                window.location.href =
                "dashbord.html";
            }

        }, 25);

    });

}

const card =
document.querySelector(".hero-card");

const robot =
document.getElementById("robot");

document.addEventListener(
"mousemove",
(e)=>{

    const x =
    (window.innerWidth/2-e.clientX)/25;

    const y =
    (window.innerHeight/2-e.clientY)/25;

    card.style.transform =
    `
    perspective(1200px)
    rotateY(${x}deg)
    rotateX(${-y}deg)
    `;

    const robotX =
    (e.clientX-window.innerWidth/2)/80;

    const robotY =
    (e.clientY-window.innerHeight/2)/80;

    robot.style.transform =
    `
    translateY(
        ${Math.sin(Date.now()/500)*8}px
    )
    rotateY(${robotX}deg)
    rotateX(${-robotY}deg)
    `;
});

for(let i=0;i<70;i++){

    const particle =
    document.createElement("div");

    particle.className =
    "particle";

    particle.style.left =
    Math.random()*100+"vw";

    particle.style.top =
    Math.random()*100+"vh";

    document.body.appendChild(
    particle);

    let speed =
    Math.random()*0.4+0.2;

    function animate(){

        let top =
        parseFloat(
        particle.style.top);

        top -= speed;

        if(top < -5){

            top = 100;

            particle.style.left =
            Math.random()*100+"vw";
        }

        particle.style.top =
        top+"vh";

        requestAnimationFrame(
        animate);
    }

    animate();
}

const buttons =
document.querySelectorAll(
".btn-glow"
);

buttons.forEach(btn=>{

    btn.addEventListener(
    "mouseenter",
    ()=>{

        btn.style.boxShadow=
        `
        0 0 20px #00e5ff,
        0 0 40px #00e5ff,
        0 0 80px #00e5ff
        `;
    });

    btn.addEventListener(
    "mouseleave",
    ()=>{

        btn.style.boxShadow=
        "none";
    });
});

});
