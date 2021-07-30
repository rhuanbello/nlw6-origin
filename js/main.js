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

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeader() {

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
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
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
    #services header, #services .card,
    #team header, #team .card,
    #highlights .text, .gallery .image,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    { interval: 100}
)

// Back to Top

const backToTop = document.querySelector('a.back-to-top')
const about = document.querySelector("#services")
const aboutHeight = about.offsetHeight

function backToTheTop () {

    if(window.scrollY >= aboutHeight) {
        backToTop.classList.add('show')
    } else {
        backToTop.classList.remove('show')
    }
}

// Menu ativo conforme ativo na página

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight / 10) * 6

    for ( const section of sections ) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']' )
            .classList.add('active')
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']' )
            .classList.remove('active')
        }
    }

}

// Ao Scrollar

window.addEventListener('scroll', function() {
    changeHeader()
    backToTheTop()
    activateMenuAtCurrentSection()
})
