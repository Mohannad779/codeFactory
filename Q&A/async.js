// console.log('this is on top');

// setTimeout(()=>{
//     for (let i = 0; i < 99; i++) {
//         const element = i;
//         console.log(element);

//     }
// }, 0)

// console.log('Hello World');

let result = document.querySelector(".res");

fetch("data.json")
  .then((data) => data.json())
  .then((data) => {
     result.innerHTML= `
  ${data.map(ele => ele.firstName)}`
  });

 

  async function getData(){
    try {
        const url = 'data.json'
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("something went wrong" + response.status)
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error);
    
    }
  }
  getData().then(data => console.log(data)
  );
  
console.log('test');

  
  