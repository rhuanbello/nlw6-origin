// Abrir/Fechar menu ao clicar no ícone

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

// Esconder o menu ao clicar em um link

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

// Adicionar sombra no header ao scrollar página

function changeHeader() {
    const header = document.querySelector("#header")
    const navHeight = header.offsetHeight

    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

// Slider

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,

});

// Scroll Reveal

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
    #home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    { interval: 100}
)

// Back to Top

function backToTheTop () {
    const backToTop = document.querySelector('a.back-to-top')
    const about = document.querySelector("#about")
    const aboutHeight = about.offsetHeight

    if(window.scrollY >= aboutHeight) {
        backToTop.classList.add('show')
    } else {
        backToTop.classList.remove('show')
    }
}

window.addEventListener('scroll', function() {
    changeHeader()
    backToTheTop()
})
