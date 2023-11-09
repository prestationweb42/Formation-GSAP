const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const imgCat = document.querySelector(".container-images img:nth-child(1)");
const imgMontain = document.querySelector(".container-images img:nth-child(2)");
const imgIceCream = document.querySelector(
    ".container-images img:nth-child(3)"
);
// console.log(imgCat);
/**
 * Section1
 * to
 * from
 * fromTo
 */
gsap.from(imgCat, {
    x: -200,
    y: -10,
    opacity: 0,
    scale: 0,
    duration: 1.9,
    delay: 0.7,
    repeat: 2,
    repeatDelay: 1,
    ease: "back",
});
if (window.innerWidth > 800) {
    setTimeout(() => {
        gsap.to(imgMontain, { y: 30, scale: 1.7, duration: 0.5 });
    }, 700);
}
setTimeout(() => {
    gsap.to("h1", {
        y: 20,
        color: "#000",
        duration: 1.9,
    });
}, 700);
setTimeout(() => {
    gsap.to(imgIceCream, { x: -90, y: -10, rotate: 360, duration: 2.9 });
}, 700);
setTimeout(() => {
    gsap.fromTo(
        section1,
        { backgroundColor: "#222" },
        { backgroundColor: "#e00000", duration: 2.9 }
    );
}, 500);
/**
 * Section 2
 * Stagger / Random-> Btns
 */
setTimeout(() => {
    gsap.fromTo(
        section2,
        { backgroundColor: "#222" },
        { backgroundColor: "#568203", duration: 2.9 }
    );
}, 800);
const btnPlay = document.querySelector(".btn_submit");
btnPlay.addEventListener("click", () => {
    gsap.from(".container-btns button", {
        x: 150,
        opacity: 0,
        duration: 1.1,
        stagger: 0.2,
    });
    gsap.to(".container-btns button", {
        // x: "random(-50, 50)",
    });
});

/**
 * Section 3
 * Keyframe -> img
 */
setTimeout(() => {
    gsap.fromTo(
        ".section3",
        { backgroundColor: "#222" },
        { backgroundColor: "#007fff", duration: 2.9 }
    );
}, 1000);
gsap.from(".section3 img", {
    keyframes: [
        { duration: 1.3, x: 250 },
        { duration: 1.3, x: 0 },
        { duration: 1.3, scale: 1.2 },
    ],
});

/**
 * Section 4
 * Fonction callback -> img
 */
setTimeout(() => {
    gsap.fromTo(
        ".section4",
        { backgroundColor: "#222" },
        { backgroundColor: "#cdcd0d", duration: 2.9 }
    );
}, 1200);
// avec une fonction dans une variable
const btnSection4 = document.querySelector(".btn_section4");
const complete = () => console.log("Terminée");
btnSection4.addEventListener("click", () => {
    gsap.from(".section4 img", {
        x: 250,
        duration: 1,
        repeat: 1,
        // onComplete: () => console.log("Terminée"),
        onComplete: complete,
        onStart: () => console.log("Start"),
        onUpdate: () => console.log("En cours"),
        onRepeat: () => console.log("Répétition"),
    });
});

/**
 * Section 5
 * Enregistrer des tweens réutilisables -> img
 */
setTimeout(() => {
    gsap.fromTo(
        ".section5",
        { backgroundColor: "#222" },
        { backgroundColor: "#7e3300", duration: 2.9 }
    );
}, 1400);
// construction de la fonction d'effets
gsap.registerEffect({
    name: "imgCrazy",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            x: 250,
            opacity: 0,
        });
    },
    defaults: { duration: 2 },
});
// appel de la fonction d'effets
const btnSection5 = document.querySelector(".btn_section5");
const imgGlace = document.querySelector(".imgGlace");
const imgChat = document.querySelector(".imgChat");
//
btnSection5.addEventListener("click", () => {
    gsap.effects.imgCrazy(imgGlace);
    gsap.effects.imgCrazy(imgChat, { duration: 5 });
});
/**
 * Section
 * Les Timelines -> img
 */
setTimeout(() => {
    gsap.fromTo(
        ".section6",
        { backgroundColor: "#222" },
        { backgroundColor: "#c9a0dc", duration: 2.9 }
    );
}, 1600);
//
const btnSection6 = document.querySelector(".btn_section6");
const imgChatSection6 = document.querySelector(".imgChat_section6");
const imgFujiSection6 = document.querySelector(".imgFuji_section6");
const imgGlaceSection6 = document.querySelector(".imgGlace_section6");
const h2Section6 = document.querySelector(".h2_section6");
const txtSection6 = document.querySelector(".txt_section6");
//
// instantiation d'une nouvelle timeline
const TL = gsap.timeline();
//
btnSection6.addEventListener("click", () => {
    TL.to(imgChatSection6, { autoAlpha: 1, y: 0, duration: 1 })
        .to(imgFujiSection6, { autoAlpha: 1, y: 0, duration: 1 }, '-=0.5')
        .to(imgGlaceSection6, { autoAlpha: 1, y: 0, duration: 1 }, '-=0.5')
        .to(h2Section6, { autoAlpha: 1, y: 0, duration: 1 }, '-=0.5')
        .to(txtSection6, { autoAlpha: 1, y: 0, duration: 1 }, '-=0.5');
});
