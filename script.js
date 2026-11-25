
gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 768) {

    const track = document.querySelector(".horizontal-track");

    const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth;
    };

    gsap.to(track, {
        x: () => -getScrollAmount(),

        ease: "none",

        scrollTrigger: {
            trigger: ".horizontal-wrapper",
            start: "top top",
            end: () => "+=" + getScrollAmount(),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true
        }
    });

}

const progress = document.querySelector(".ruler-progress");
const percentage = document.querySelector(".scroll-percentage");

window.addEventListener("scroll", function () {

    const scrollTop = window.scrollY;

    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    progress.style.height = scrollPercent + "%";

    percentage.textContent =
        Math.round(scrollPercent).toString().padStart(2, "0") + "%";

});
