export default function openMenu(){
    var home__content = document.getElementById('home__content');
    var cards = document.createElement('div');
    cards.classList.add("cards");
    home__content.appendChild(cards);
    var card__container = document.createElement('div');
    card__container.classList.add("card__container");
    cards.appendChild(card__container);



    var card = document.createElement('div');
    card.classList.add("card");
    card__container.appendChild(card);

    let img = document.createElement('img');
    img.src="./assets/pizza1.png";
    img.classList.add('pizzaImg');
    card.appendChild(img);
    let name = document.createElement('div');
    name.classList.add('name','cardText', 'para');
    name.innerHTML = "Cheese Pizza";
    card.appendChild(name);
    let pizzaPara = document.createElement('p');
    pizzaPara.classList.add('pizzaPara', 'cardText');
    pizzaPara.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ligula quis eros egestas elementum ac sit amet elit. Aenean quis vestibulum urna, non scelerisque urna. In et purus nec purus faucibus dictum eu id ante. Nam scelerisque, nibh eu ornare mollis.";
    card.appendChild(pizzaPara);
    let button = document.createElement('button');
    button.classList.add('buy__now');
    button.innerHTML = "Buy Now";
    card.appendChild(button);
}





