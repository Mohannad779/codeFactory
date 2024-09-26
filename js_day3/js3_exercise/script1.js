
//Ex1*1
function findHighestValue(array) {
    if (array.length === 0) {
        return null;
    }
    let highestValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > highestValue) {
            highestValue = array[i];
        }
    }
    return highestValue;
}

let numbers = [1, 7, 200,-3, 9,100];
let max = numbers[0];

for(let val of numbers){
    if(max < val){
        max = val
    }
}
console.log(max);


let array = [1, 7, -3, 9];
console.log(findHighestValue(array)); 



//Ex1*2
let array1 = [1, 14, -3, 9];
function findHighestValue(array1) {
    return array.length === 0 ? null : Math.max(...array1);
}

console.log(findHighestValue(array1));  


console.log(Math.max(...array));
