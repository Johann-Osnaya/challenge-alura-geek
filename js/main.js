import { connectionAPI } from "./connectionAPI.js"
const sendProduct = document.querySelector("[data-form]");
const cleanInputs = document.querySelector("[data-clean]");
const cardsSection = document.querySelector('[data-cards]');
const errorMessage = document.querySelector('.error-message');
const nameInput = document.querySelector("[data-name]");
const priceInput = document.querySelector("[data-price]");
const imageInput = document.querySelector("[data-image]");
const form = document.querySelector('[data-form]')
const sendButton = document.querySelector('[data-create]')

async function addCard(event){
    event.preventDefault();
    event.stopImmediatePropagation();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    try {
        await connectionAPI.createProduct(name, price, image)
    } catch (error) {
        alert(error)
    }
    
}

function displayErrorMessage(message) {
    errorMessage.style.display = "flex";
    errorMessage.textContent = message;
    setTimeout(() => {
        errorMessage.textContent = "";
        errorMessage.style.display= "none";
    }, 5000)
}

sendProduct.addEventListener('submit', event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    addCard(event);
});

cleanInputs.addEventListener('click', () => {
    document.querySelector("[data-name]").value  = "";
    document.querySelector("[data-price]").value  = "";
    document.querySelector("[data-image]").value  = "";
});

cardsSection.addEventListener('click', async (e) => {
    e.preventDefault()
    if(e.target.className === "delete-button")
        {
            if(confirm("¿Estas seguro que quieres eliminar el producto?"))
                {
                  await  connectionAPI.deleProduct(e.target.id)
                }
        }

});

nameInput.addEventListener('blur', (e) => {
    if(!e.target.value || e.target.value === null) {
        displayErrorMessage("⚠ El campo nombre no puede estar vacio")
    }
});


priceInput.addEventListener('blur', (e) => {
    if(Number.isNaN(parseFloat(e.target.value)) || e.target.value === null ) {
        displayErrorMessage("⚠ El campo precio no puede estar vacio y debe de ser un número")
    }

});

imageInput.addEventListener('blur', (e) => {
    if(!e.target.value || e.target.value === null) {
        displayErrorMessage("⚠ El campo imagen no puede estar vacio")
    }
});

form.addEventListener('keyup', (e) => {
    if(nameInput.value && priceInput.value && imageInput.value) {
        sendButton.style.display = "flex";
    }
})