/*====== RELLAX =====*/
var rellax = new Rellax('.parallax');

/*====== ANIMATE GSAP ======*/
/*Text*/
gsap.from('.home__title', {opacity:0, duration: 3, delay: 1.3, y: 35, ease:'expo.out'});
gsap.from('.home__subtitle', {opacity:0, duration: 3, delay: 1.1 , y: 35, ease:'expo.out'});

/*Scroll*/
gsap.from('.home__scroll', {opacity:0, duration: 3, delay: 1.5, y: 25, ease:'expo.out'});


/*====== SCROLL REVEAL SECTION ======*/
const sr1 = ScrollReveal({
    duration: 2500,
    reset: true
});

/*Data*/
sr1.reveal('.section__data',{origin: 'left',distance: '70px'});

/*Imgs*/
sr1.reveal('.section__img',{origin: 'left',distance: '90px',delay: 200});
