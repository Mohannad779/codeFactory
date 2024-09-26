const grades = [100, 40, 80, 50, 75];
const students = ["Dusan", "Serri", "Riola", "Hassan"];
const subject = ["Math", "Art"];

const studentsJson = `[
  {
    "name": "Dusan",
    "marks": [
      {
        "subject": "Math",
        "grades": [100, 40]
      },
      {
        "subject": "Art",
        "grades": [80, 40]
      }
    ]
  }
]`;
const studentObj = JSON.parse(studentsJson);
// console.log(studentObj[0].name);

let testObj = [
  {
    name: "test",
    price: 120,
    play: function () {
      console.log("you have started playing");
    },
  },
  {
    name: "test1",
    price: 100,
    play: function () {
      console.log("you have started playing");
    },
  },
];
// console.log(testObj);
let testJson = JSON.stringify(testObj);
// console.log(testJson);

// sessionStorage.setItem("products", testJson)

// const jsonProducts = localStorage.getItem("products");

// const objProducts = JSON.parse(jsonProducts);
// console.log(objProducts);

// localStorage.removeItem("products")
// console.log(localStorage.getItem("products"));

const jsonShoppingList = `[
  {
    "item": "Eggs",
    "quantity": 12,
    "unit" : "pieces",
    "bought" : true
  },
  {
    "item": "Bread",
    "quantity": 1,
    "unit" : "loaf",
    "bought" : false
  },
  {
    "item": "Apples",
    "quantity": 4,
    "unit" : "kilograms",
    "bought" : true
  },
  {
    "item": "Milk",
    "quantity": 1,
    "unit" : "liters",
    "bought" : false
  }
]`;
const shoppingListItems = JSON.parse(jsonShoppingList);
const output = document.querySelector(".output");

shoppingListItems.forEach((ele) => {
  output.innerHTML += `
    
      <li class="list-group-item d-flex justify-content-between">
      <span>
      ${ele.item} => ${ele.quantity} ${ele.unit} 
      (${ele.bought ? "already bought" : "not bought"})
      </span>
      <button class="bought">bought</button>
      </li>
      
    
  `;
});


function addEventListeners(){
  const btns = document.querySelectorAll('.bought');

  btns.forEach((btn, index) =>{
    btn.addEventListener('click', ()=>{
      shoppingListItems[index].bought = true;
      
      output.innerHTML = '';
      shoppingListItems.forEach((ele) => {
        output.innerHTML += `
          
            <li class="list-group-item d-flex justify-content-between">
            <span>
            ${ele.item} => ${ele.quantity} ${ele.unit} 
            (${ele.bought ? "already bought" : "not bought"})
            </span>
            <button class="bought">bought</button>
            </li>
            
          
        `;
      });
      addEventListeners()
    })
  })
}
addEventListeners()


const form = document.getElementById("shoppingListForm");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const unit = document.getElementById("unit").value;
//   const item = document.getElementById("item").value;
//   const qtty = document.getElementById("qtty").value;
//   const bought = document.querySelector('input[name="bought"]:checked').value;

//   console.log(unit, item, qtty, bought);

//   const newItem = {
//     item: item,
//     quantity: qtty,
//     unit: unit,
//     bought: JSON.parse(bought),
//   };

//   shoppingListItems.push(newItem);
//   console.log(shoppingListItems);
//   output.innerHTML= '';
//   shoppingListItems.forEach((ele) => {
    
//     output.innerHTML += `
      
//         <li class="list-group-item d-flex justify-content-between">
//         <span>
//         ${ele.item} => ${ele.quantity} ${ele.unit} 
//         (${ele.bought ? "already bought" : "not bought"})
//         </span>
//         <button class="bought">bought</button>
//         </li>
        
      
//     `;
    
//   });
//   addEventListeners()
// });
