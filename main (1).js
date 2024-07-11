/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater then 50 viewport height, add the scroll-hrader class to the hrader tag
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader) 

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
    this.scrollY >= 350 ?  scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp)

/*=============== LOGIN ===============*/ 
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});
// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());
// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id'),
                  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

