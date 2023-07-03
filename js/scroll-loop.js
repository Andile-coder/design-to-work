gsap.registerPlugin(ScrollTrigger);

// repeat first three items by cloning them and appending them to the .grid
const repeatItems = (parentEl, total = 0) => {
    const items = [...parentEl.children];
    for (let i = 0; i <= total-1; ++i) {
        var cln = items[i].cloneNode(true);
        parentEl.appendChild(cln);
    }
};

const lenis = new Lenis({
    smooth: true,
    infinite: true,
    normalizeWheel: true,
});

lenis.on('scroll',()=>{
  ScrollTrigger.update()
})

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

  document.body.classList.remove('loop_body');

    requestAnimationFrame(raf);
    
    const refresh = () => {
        ScrollTrigger.clearScrollMemory();
        window.history.scrollRestoration = 'auto';
        ScrollTrigger.refresh(true);
    }

    refresh();
    window.addEventListener('resize', refresh);