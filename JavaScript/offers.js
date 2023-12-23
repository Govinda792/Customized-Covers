function updateQuantity(element, action) {
    const quantityElement = element.parentElement.querySelector('.product-quantity');
    let quantity = parseInt(quantityElement.innerText);

    if (action === 'increase' && quantity < 10) {
        quantityElement.innerText = ++quantity;
    } else if (action === 'decrease' && quantity > 1) {
        quantityElement.innerText = --quantity;
    } else {
        alert("You can't add more than 10 items or have less than 1 item");
    }
}