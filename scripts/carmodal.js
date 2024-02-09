const carButton = document.getElementById("img-carrito");

const showCart = (button) => {
    button.addEventListener("click", () => {
        document.innerHTML += `
        <div>
        <section>este es el carrito de compras</section>
        </div>
        `
    }) 
}

showCart(carButton)