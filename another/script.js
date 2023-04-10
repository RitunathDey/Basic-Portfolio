// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
};
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
});

//animation

const text = document.querySelector(".sec-text");
    
            const textLoad = () => {
                setTimeout(() => {
                    text.textContent = "Student";
                }, 0);
                setTimeout(() => {
                    text.textContent = "Web Developer";
                }, 4000);
                setTimeout(() => {
                    text.textContent = "Programmer";
                }, 8000); //1s = 1000 milliseconds
            }
    
            textLoad();
            setInterval(textLoad, 12000);

