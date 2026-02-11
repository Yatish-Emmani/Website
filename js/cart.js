// Cart management functions

function updateCart(name, price, qty) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existing = cart.find(p => p.name === name);

    if (qty <= 0) {
        cart = cart.filter(p => p.name !== name);
    } else {
        if (existing) {
            existing.qty = qty;
        } else {
            cart.push({name: name, price: price, qty: qty});
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = cart.reduce((sum, item) => sum + item.qty, 0);
    const countElement = document.getElementById("cartCount");
    if (countElement) {
        countElement.innerText = total;
        countElement.style.display = total > 0 ? 'inline' : 'none';
    }
}

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function clearCart() {
    localStorage.removeItem("cart");
    updateCartCount();
}

function removeFromCart(name) {
    let cart = getCart();
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartItemQuantity(name, qty) {
    let cart = getCart();
    let item = cart.find(p => p.name === name);
    if (item) {
        if (qty <= 0) {
            removeFromCart(name);
        } else {
            item.qty = qty;
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
        }
    }
}

function getCartTotal() {
    let cart = getCart();
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function getCartItemCount() {
    let cart = getCart();
    return cart.reduce((sum, item) => sum + item.qty, 0);
}
