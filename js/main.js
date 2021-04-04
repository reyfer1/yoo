/*== show menu ==*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*== remove menu mobile ==*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*== scroll section active link ==*/
const section = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('actives')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('actives')
        }
    })
}

window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*== show scrolltop ==*/

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')

    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop)

function initMap(){
    const palmary = { lat: -75, lng: 10.01};
    const map = new google.maps.Map(Document.getElementById('map'), {
        zoom: 4,
        center: palmary,
    });
    const maker = new google.maps.Maker({
        position: palmary,
        map: map,
    });
}













