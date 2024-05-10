import { connectionAPI } from "./connectionAPI.js";

const cardsSection = document.querySelector('[data-cards]');


export const createCard = (name, price, image, id) => {
    const card = document.createElement("div")
    card.className = "card";
    card.id = `card-${id}`;
    card.innerHTML = `<img src="${image}">
    <div class="card-container--info">
        <p class="product_description">${name}</p>
        <div class="card-container--value">
            <p>$ ${price}</p>
            <i class="delete-button" id=${id}></i>
        </div>
    </div>`
    return card;
}
    

const showCards = async () => {
    const cards = await connectionAPI.getCards();

    cards.map(card => cardsSection.appendChild(createCard(card.name,card.price, card.image, card.id)))
}

showCards();