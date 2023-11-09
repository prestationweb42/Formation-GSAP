gsap.to(".b2 h2", {
    duration: 2,
    y: 0,
    scale: 2,
    autoAlpha: 1,
    scrollTrigger: {
        trigger: ".b2 h2",
        markers: true,
        // Trigger(start end) Scroller(top center bottom)
        // start: "top top",
        // start: "top bottom",
        // start: "top center",
        // start: "top-=20% 60%",
        // start: "center-=40% 70%",
        start: "top 60%",
        end: "bottom 40%",
        // Event : onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "play pause reverse reset",
        // play pause resume reset restart complete reverse none
        onEnter: () => console.log("Enter"),
        onLeave: () => console.log("Leave"),
        onEnterBack: () => console.log("EnterBack"),
        onLeaveBack: () => console.log("LeaveBack"),
        // scrub -> joue l'animation en même temps que le scroll
        // scrub: true,
        scrub: 0.5, // valeur d'animation
    },
});
// pin -> epingle(bloque) un element à une valeur pendant le scroll
// gsap.to(".b2", {
//     scrollTrigger: {
//         trigger: ".b2",
//         pin: true,
//         markers: true,
//     },
// });
// on peut remplacer le fonction ci-dessous par celle de dessous
ScrollTrigger.create({
    trigger: ".b2",
    pin: true,
    // markers: true,
});
