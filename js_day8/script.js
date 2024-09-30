// Array of course objects
let courses = [
  {
    name: "HTML Course",
    image: "html-icon-logo.png",
    price: 500.99,
    qtty: 1,
  },
  {
    name: "CSS Course",
    image: "css-icon-logo.png",
    price: 800.5,
    qtty: 1,
  },
  {
    name: "Bootstrap Course",
    image: "bs-icon-logo.png",
    price: 700.0,
    qtty: 1,
  },
  {
    name: "JS Course",
    image: "js-icon-logo.png",
    price: 2100.0,
    qtty: 1,
  },
  {
    name: "Typescript Course",
    image: "ts-icon-logo.png",
    price: 1000.0,
    qtty: 1,
  },
  {
    name: "Angular Course",
    image: "angular-icon-logo.png",
    price: 2800.0,
    qtty: 1,
  },
];
// Target the div element with an id of result where the courses will be displayed
let result = document.getElementById("result");

// Loop through each course and display it as a card in the DOM
courses.forEach((course) => {
  result.innerHTML += `
        <div>
            <div class="card my-4">
                <img src="images/${course.image}" class="card-img-top" alt="${course.name}">
                <div class="card-body">
                    <h5 class="card-title">${course.name}</h5>
                    <p class="card-text">${course.price}€</p>
                    <button class="btn btn-primary addToCart">Add To Cart</button>
                </div>
            </div>
        </div>
    `;
});
// cart array to hold items added to the cart, at the beginning is empty
let cart = [];

// Get all "Add To Cart" buttons
let addToCartBtns = document.querySelectorAll(".addToCart");

// Loop through 'Add to cart' buttons and add click event listeners to each of them
addToCartBtns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    // Call the addToCart function with the corresponding course
    addToCart(courses[i]);
  });
});

// Function to add the selected course to the cart
function addToCart(item) {
  // Check if the course is already in the cart
  let existingCourse = cart.find((val) => {
    return val.name == item.name;
  });

  // (alternative)   if (cart.find((val) => val.name == item.name)) {

  // If the course is already in the cart, increase the quantity
  if (existingCourse) {
    item.qtty++;
  } else {
    // If the course is not in the cart, add it
    cart.push(item);
  }
  // Update the cart display(DOM) and recalculate the total price
  displayCart();
  calculateTotal();
}

// Function to display the items in the cart
function displayCart() {
  // Clear the cart display area
  document.getElementById("cart").innerHTML = "";
  cart.forEach((item) => {
    document.getElementById("cart").innerHTML += `
        <div class='row d-flex align-items-center'>
            <div class='col-2'>
                <img src="images/${item.image}" class='img-fluid w-50' alt='${item.name}'>
            </div>
            <div class='col-4'>
                <h5 class='mb-2'>${item.name}</h5>
            </div>
             <div class='col-3 d-flex'>
                <button class='btn btn-success plusBtns'>+</button>
                <h5 class='m-2 qtty'>${item.qtty}</h5>
                <button class='btn btn-success minusBtns'>-</button>
            </div>
            <div class='col-2'>
                <h5 class='mb-2'>${item.price}€</h5>
            </div>
            <div class='col-1 text-end'>
                <button class='btn btn-danger deleteBtns'>x</button>
            </div>
        </div>
        <hr>
    `;
  });
  // Get the buttons for increasing, decreasing quantity, and deleting items
  let plusBtns = document.querySelectorAll(".plusBtns");
  let minusBtns = document.querySelectorAll(".minusBtns");
  let qttyVal = document.querySelectorAll(".qtty");
  let deleteBtns = document.querySelectorAll(".deleteBtns");

  // Loop and add event listeners to "delete" buttons to remove items from the cart
  deleteBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      // Reset the quantity and remove the item from the cart
      cart[index].qtty = 1;
      cart.splice(index, 1);
      console.log(cart);
      displayCart();
      calculateTotal();
    });
  });
  // Loop and add event listeners to "plus" buttons to increase item quantity
  plusBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      // Increase the quantity
      cart[index].qtty++;
      //   Update the value in the DOM
      qttyVal[index].innerHTML = cart[index].qtty;
      calculateTotal();
    });
  });

  // Loop and add event listeners to "minus" buttons to decrease item quantity
  minusBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      // Only if quantity is more than 1, decrease it
      if (cart[index].qtty > 1) {
        // Decrease the quantity
        cart[index].qtty--;
        //   Update the value in the DOM
        qttyVal[index].innerHTML = cart[index].qtty;
      } else {
        // Remove the item from the cart if quantity becomes zero so less than 1
        cart.splice(index, 1);
        displayCart();
      }
      calculateTotal();

      console.log(cart);
    });
  });
}

// Function to calculate the total price of the cart
function calculateTotal() {
  let total = 0;
  // Loop through the cart and sum up the total price
  for (let cartItem of cart) {
    total = cartItem.qtty * cartItem.price + total;
  }

  // Display the total price in the DOM
  document.getElementById("total").innerText = total + "€";
}
