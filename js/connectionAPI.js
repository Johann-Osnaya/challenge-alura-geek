const getCards = async () => {
    const cardsPromise = await fetch("http://localhost:3001/products");
    return await cardsPromise.json()
}

const createProduct = async (name, price, image) => {
    console.log(name, price, image)
    const cardPromise = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name,
            price,
            image
        })
    });
    const cardData =   await cardPromise.json();
    console.log(cardData)
    console.log(cardData);
    if(cardData.ok) {
        throw new Error("Ha ocurrido un error al enviar el producto");
    }
    return cardData;
}

const deleProduct = async (id) => {
    const cardPromise = await fetch(`http://localhost:3001/products/${id}`, {method: "DELETE"});
}


export const connectionAPI = {
    getCards,
    createProduct,
    deleProduct
}