export default function clearContainers(){
    let home__content = document.getElementById('home__content');
    home__content.remove();
    let overlay = document.getElementById('overlay');
    let newHC = document.createElement('div');
    newHC.classList.add('home__content');
    newHC.setAttribute("id", "home__content");
    overlay.appendChild(newHC);
}