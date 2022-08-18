export default function openAbout(){
    let home__content = document.getElementById('home__content');
    let about__container = document.createElement('div');
    about__container.classList.add('about__container');
    home__content.appendChild(about__container);

    let about = document.createElement('div');
    about.classList.add('about');
    about__container.appendChild(about);

    let img = document.createElement('img');
    img.src="./assets/pizza2.png";
    img.classList.add('aboutImg');
    about.appendChild(img);

    let h1 = document.createElement('h1');
    h1.classList.add('h1');
    h1.innerText = "Bake n` take";
    about.appendChild(h1);

    let since = document.createElement('p');
    since.classList.add('since');
    since.innerText="~ Since 1998 ~";
    about.appendChild(since);

    let aboutPara =document.createElement('p');
    aboutPara.classList.add('aboutPara');
    aboutPara.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    about.appendChild(aboutPara);
}