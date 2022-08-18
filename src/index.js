import openHome from '../src/home.js'
import openMenu from '../src/menu.js'
import openAbout from '../src/about.js'
import clearContainers from '../src/clearContainers.js'

// openHome();
// openMenu();
// openAbout();

let home = document.getElementById('home');
home.addEventListener("click", clearContainers);
home.addEventListener("click", openHome);


let menu = document.getElementById('menu');
menu.addEventListener("click", clearContainers);
menu.addEventListener("click", openMenu);


let about = document.getElementById('about');
about.addEventListener("click", clearContainers);
about.addEventListener("click", openAbout);


// function viewMenu(){
//     console.log("what")
//     menu.addEventListener("click", clearContainers);
//     menu.addEventListener("click", openMenu);
//     return;
// }

const myButton = document.querySelector('.home__menu');
myButton.addEventListener("click" , () => {
    clearContainers();
    openMenu();
    console.log("huh?")
} );
