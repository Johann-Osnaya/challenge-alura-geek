import { connectionAPI } from "./connectionAPI";

const sendProduct = document.querySelector("[data-form]");

async function addCard(event){
    event.preventDefault()
    event.stopImmediatePropagation()
    const nameInput = document.querySelector("[data-name]").value;
    const priceInput = document.querySelector("[data-price]").value;
    const imageInput = document.querySelector("[data-image]").value;

    try {
        await connectionAPI.createProduct(nameInput, priceInput, imageInput)
    } catch (error) {
        alert(error)
    }
    
}

sendProduct.addEventListener('submit', event => addCard(event));