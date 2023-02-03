// show MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// menu SHOW 
// Validte if Constant Exists
if (navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}


// menu HIDDEN 
// Validate if Constant Exists
if (navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

// remove MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link , we remove show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))



// swiper PROJECTS
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidePerView: 2,
            spaceBetween: -56,
        },
    },
  });


// swiper TESTIMONIAL
let swiperTestimonial  = new Swiper(".testimonial__container", {
    grabCursor: true,

    navigation: {
        nextEl:" .swiper-button-next",
        prevEl: " .swiper-button-prev",
    },
});

// email  JS
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')
const sendEmail = (e) =>{
    e.preventDefault()

    //Check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){

        //Add and remove color
        contactMessage.classList.remove('color-blue') 
        contactMessage.classList.add('color-red')

        //Show messages
      contactMessage.textContent = 'Write all the input fields 📩'  
    }else{
        //serviceID - templateID - #form - publicKey
      emailjs.sendForm('service_kaczt8m','template_uotwjtd','#contact-form','b66xruqTklV3a4qmQ')
           .then(() =>{
              //show message and add color
              contactMessage.classList.add('color-blue')
              contactMessage.textContent = 'Message sent ✅'

              //Remove message after five seconds
              setTimeout(() =>{
                 contactMessage.textContent = ''
              }, 5000)
           }, (error) =>{
            alert('OOPs! SOMETHING HAS FAILED...', error)
           })

        // To clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = '' 
    }  
}
 
contactForm.addEventListener('submit', sendEmail)

// scroll section ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
              sectionsClass.classList.add('active-link')
        }else {
              sectionsClass.classList.remove('active-link')
        } 
    })
}
window.addEventListener('scroll', scrollActive)


// show SCROLL UP
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
   // when the scroll is higher than 350 viewport height, and the show-scroll class to the a tag with the scrollup
     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         :scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)



         //dark LIGHT THEME
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'


//we validate if the user previously chose a topic
if (selectedTheme) {
    //if the validation is fulfilled , we what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //add or remove the dark / icon theme 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})


// change BACKGROUND HEADER
const scrollHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

//scroll REVEAL ANIMATION
const sr =ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
    // reset: true   /* Animation repeat*/
})

sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin:'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: `left`})
sr.reveal(`.skills__content:nth-child(2),  .contact__content:nth-child(2)`, {origin: `right`})
sr.reveal(`.qualification__content, .services__card`, {interval: 100})
 



