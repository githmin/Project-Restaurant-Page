import openHome from '../src/home.js'
import openMenu from '../src/menu.js'
import openAbout from '../src/about.js'

// openHome();
// openMenu();
// openAbout();

let home = document.getElementById('home');
home.addEventListener("click", openHome);

let menu = document.getElementById('menu');
menu.addEventListener("click", openMenu);

let about = document.getElementById('about');
about.addEventListener("click", openAbout);