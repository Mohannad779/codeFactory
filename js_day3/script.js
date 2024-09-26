// i++ is the same as i+=1 and i = 1 + 1
// for(let i = 0; i < 10; i++){
//     for(let j = 0; j < 5; j++){
//         console.log(j);
        
//     }  
//     console.log("outer loop had done one itteration, i is now " + i);
    
// }

let arr = [10, 20, 25, 63, 80, 90]

// For

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
    
// }


//for each loop

// arr.forEach((value, index) => {
//     console.log(value, index);
// })

//for of loop

// for(let val of arr){
//     console.log(val);
    
// }

// for in loop

// for( let index in arr){
//     console.log(index);
    
// }

// while loop

// let username = "";

// while(username == "" || username == null){
//     username = prompt("enter a username")
// }
// console.log("hello" +username);



// let username1
// do{
//     username = prompt("enter a username")
// }while(username == "" || username == null)
//     console.log("hello" +username);

let paragraph = document.getElementById("p3");
console.log(paragraph.innerText);
 paragraph.innerHTML = "<b>new inner text</b>";

paragraph.style.backgroundColor= "red"

let p1 = document.getElementsByClassName("p2");
console.log(p1);

let paragraphs = document.querySelectorAll(".p2");
console.log(paragraphs);

paragraphs[0].style.background = "blue"
paragraphs[1].style.background = "blue"

paragraphs.forEach((paragraph, index)=>{
    paragraph.style.background = "cyan"
    paragraph.innerHTML +=index;
    paragraph.getAttribute("class");
    console.log(paragraph.getAttribute("class"));
    
})

