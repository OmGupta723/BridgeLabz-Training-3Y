"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    getTotal() {
        return this.items.reduce(function(total, item) {
            return total + item.price * item.quantity;
        }, 0);
    }
}

const cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1500, 1);

const cartDetails = document.getElementById("cartDetails");
const totalElement = document.getElementById("total");
const discountElement = document.getElementById("discount");
const finalTotalElement = document.getElementById("finalTotal");
const message = document.getElementById("message");

function displayCart() {
    cartDetails.innerHTML = "";

    cart.items.forEach(function(item) {
        cartDetails.innerHTML += `
            <p>${item.name} - Price: ₹${item.price}
            × ${item.quantity} = ₹${item.price * item.quantity}</p>
        `;
    });

    totalElement.textContent =
        "Total Amount: ₹" + cart.getTotal().toFixed(2);

    discountElement.textContent = "Discount: ₹0.00";
    finalTotalElement.textContent =
        "Final Amount: ₹" + cart.getTotal().toFixed(2);
}

document.getElementById("applyBtn").addEventListener("click", function() {
    const coupon = document.getElementById("coupon").value.trim().toUpperCase();

    const couponPattern = /^(SAVE|DISC)(\d{1,2})$/;

    if (!couponPattern.test(coupon)) {
        message.textContent = "Invalid coupon code!";
        displayCart();
        return;
    }

    const discountPercent = Number(coupon.match(/\d+/)[0]);

    if (discountPercent < 1 || discountPercent > 100) {
        message.textContent = "Discount must be between 1% and 100%.";
        displayCart();
        return;
    }

    const total = cart.getTotal();
    const discountAmount = total * discountPercent / 100;
    const finalAmount = total - discountAmount;

    message.textContent = "Coupon applied successfully!";
    totalElement.textContent = "Total Amount: ₹" + total.toFixed(2);
    discountElement.textContent =
        "Discount (" + discountPercent + "%): ₹" +
        discountAmount.toFixed(2);
    finalTotalElement.textContent =
        "Final Amount: ₹" + finalAmount.toFixed(2);

    console.log("Coupon:", coupon);
    console.log("Total Amount:", total);
    console.log("Discount:", discountAmount);
    console.log("Final Amount:", finalAmount);
});

displayCart();