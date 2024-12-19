// script.js
let carritoLista = [];

function addToCarrito(productId) {
    const producto = producto.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        cartList.appendChild(li);
        total += product.price;
    });

    document.getElementById('total').textContent = total;
}