   let cart = [];

  // Function to update the cart display
  function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const itemCount = document.getElementById('item-count');
    const totalPrice = document.getElementById('total-price');
    const discountMsg = document.getElementById('discount-msg');

    cartItems.innerHTML = '';
    let total = 0;
    let itemsCount = 0;

    // Loop through cart and create cart list items
    cart.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.innerHTML = `
        ${item.name} (€${item.price}) x ${item.quantity}
        <button class="btn btn-danger btn-sm float-end" onclick="removeFromCart(${index})">Remove</button>
        <input type="number" min="1" value="${item.quantity}" class="float-end me-2" style="width:60px;" onchange="changeQuantity(${index}, this.value)">
      `;
      cartItems.appendChild(listItem);

      total += item.price * item.quantity;
      itemsCount += item.quantity;
    });

    itemCount.textContent = itemsCount;
    totalPrice.textContent = total.toFixed(2);

    // Apply discount if total is above €100
    if (total > 100) {
      const discount = total * 0.1; 
      totalPrice.textContent = (total - discount).toFixed(2);
      discountMsg.textContent = `10% discount applied! You saved €${discount.toFixed(2)}.`;
    } else {
      discountMsg.textContent = '';
    }
  }

  // Function to add item to cart
  function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    updateCart();
  }

  // Function to remove item from cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }

  // Function to change item quantity
  function changeQuantity(index, newQuantity) {
    cart[index].quantity = Number(newQuantity);
    updateCart();
  }

  // Event listeners for add to cart buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));
      addToCart(name, price);
    });
  });

