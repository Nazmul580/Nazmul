

const hamBurger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const menuItems = document.querySelectorAll('.nav-menu ul li');
let isNavExpanded = "false"

// function to declear actived nav 
menuItems.forEach((curElm) => {
    curElm.addEventListener('click', () => {
        curElm.classList.add('nav-active');
        toggleMenu();
        menuItems.forEach((item) => {
            if(item!== curElm){
                item.classList.remove('nav-active');
            }
        });
    });
});

// Function to toggle the navigation menu visibility when the hamburger menu is clicked.
const toggleMenu = () =>{

    isNavExpanded = !isNavExpanded;
    
    if(!isNavExpanded){
         hamBurger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }else{
        hamBurger.innerHTML = '<i class="fas fa-bars"></i>';
    }
    navMenu.classList.toggle('nav-expanded');
};

// Event listener for the hamburger menu click event.
hamBurger.addEventListener('click', () => toggleMenu());
