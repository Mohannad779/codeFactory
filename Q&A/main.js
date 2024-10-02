import Hello from "./test.js"
function print(ele) {
  
  ele.style.backgroundColor = "red"
    
}
const ele = document.querySelector('.sortBtnWrapper');
print(ele)


 const btn = document.querySelector('.myBtn');
// btn.addEventListener("click", function (e){
//    testFunc(e.target)
    
// })

// function testFunc(element){
//     element.className = 'btn btn-success'
// }

const input = document.getElementById("myInput");
const subBtn = document.getElementById("subBtn");
const output = document.getElementById("output");

subBtn.addEventListener("click", ()=>{
    let val = input.value
    output.innerHTML = val
    console.log(val);
    
    
})

Hello()