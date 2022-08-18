export default function openHome(){
    var home__content = document.getElementById('home__content');
    var newP = document.createElement('p');
    newP.setAttribute("id","home__text");
    newP.innerHTML= "Bake n` take";
    home__content.appendChild(newP);
    var newP2 = document.createElement('p');
    newP2.setAttribute("id","home__location");
    newP2.innerHTML = "COLOMBO, LK";
    home__content.appendChild(newP2);
    let button = document.createElement('button');
    button.innerText = "View Menu";
    button.classList.add('home__menu');
    button.setAttribute("id", "menuBtn");
    home__content.appendChild(button);
}