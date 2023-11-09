window.addEventListener("load", loader);
function loader() {
    console.log("toto");
    const TLLoad = gsap.timeline({
        default: {
            ease: "power2",
        },
    });
    TLLoad.to(".images-container", {
        height: 400,
        delay: 0.5,
        duration: 1.3,
    });
    TLLoad.to(
        ".bloc-txt",
        {
            height: "auto",
            duration: 0.6,
        },
        "-=0.6"
    );
    TLLoad.to(
        ".bloc-txt h2",
        {
            y: 0,
            duration: 0.6,
        },
        "-=0.6"
    );
    TLLoad.to(
        ".f2",
        {
            y: 0,
            duration: 1,
        },
        "-=0.6"
    );
    TLLoad.to(
        ".flip-img1",
        {
            display: "none",
            duration: 0.6,
        },
        "-=0.6"
    );
    TLLoad.to(".f2", {
        y: "-100%",
        duration: 0.7,
    });
    TLLoad.to(".load-container", {
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.7,
    });
    TLLoad.add(() => {
        document.querySelector("video").play();
    }, "-=0.8");
}
