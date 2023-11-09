const allNavLinks = document.querySelectorAll("nav a");
const imgNav = document.querySelectorAll("nav img");
const title = document.querySelector("h1");
const verticalLine = document.querySelector(".middle-line");
const grapesLogo = document.querySelector(".home-content img");
const homeBTN = document.querySelector(".home-content button");
//
window.addEventListener("load", initAnim);
//
function initAnim() {
    const TLFade = gsap.timeline();
    TLFade.to(title, { autoAlpha: 1, y: 0, delay: 0.2 });
    TLFade.to(verticalLine, { height: 200 }, "-=0.2");
    TLFade.to(grapesLogo, { autoAlpha: 1, y: 0 }, "-=0.2");
    TLFade.to(homeBTN, { autoAlpha: 1, y: 0 }, "-=0.2");
    TLFade.to(allNavLinks, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.15 }, '-=0.2');
    TLFade.to(imgNav, { autoAlpha: 1, y: 0, stagger: 0.3 }, "-=0.2");
}
