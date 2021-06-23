/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() { while (table.rows.length > 0) {
  table.deleteRow(0)
}}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tableBody = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (let i = 0; i < cart.items.length; i++) {
    
    let tr = document.createElement('tr');
    tableBody.appendChild(tr);
    let td = document.createElement('td')
    td.textContent = 'X'
    tr.appendChild(td);

    let td2 = document.createElement('td')
    td2.textContent = cart.items[i].quantity;
    tr.appendChild(td2);

    let td3 = document.createElement('td')
    td3.textContent = cart.items[i].product;
    tr.appendChild(td3);

  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  if (event.target.textContent === 'X') {
    cart.removeItem(event.target.parentElement.id);
  }
  localStorage.setItem('cart', JSON.stringify(cart.items));
  renderCart();

 }


// This will initialize the page and draw the cart on screen
renderCart();
