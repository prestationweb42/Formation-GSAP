let app = document.querySelector(".title");

var typewriter = new Typewriter(app, {
    loop: true,
});

typewriter
    .typeString("Bienvenue sur Greensock / GSAP !")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Tester GSAP dans ce bac à sable")
    .pauseFor(2500)
    .deleteChars(20)
    .typeString("<strong>. Merci !</strong>")
    .pauseFor(2500)
    .start();
