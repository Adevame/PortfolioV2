const slidingGauche = document.querySelector('.slide-in');
const slideIn = slidingGauche.classList.add('active');

const slidingPropos = document.querySelector('.slide-inP');
const slidInP = slidingPropos.classList.add('active');

const slidingExp = document.querySelector('.slide-inE');
const slidInE = slidingExp.classList.add('active');

const slidingPro = document.querySelector('.slide-inPr');
window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToTopViewport = slidingPro.getBoundingClientRect().top;
    console.log(topElementToTopViewport);
    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5) {
        slidingPro.classList.add('active')
    }
})

const slidingFormulaire = document.querySelector('.slide-inForm');
window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToTopViewport = slidingFormulaire.getBoundingClientRect().top;
    console.log(topElementToTopViewport);
    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.75) {
        slidingFormulaire.classList.add('active')
    }
})