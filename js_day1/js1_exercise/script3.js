// Step 1: Declare an array of people
let people = ["Greg", "Mary", "Devon", "James"];

// Step 2: Remove "Greg" from the array
people.shift();
console.log(people);

// Step 3: Add "Matt" to the front of the array
people.unshift("Matt");
console.log(people);

// Step 4: Remove "James" from the array
people.pop();
console.log(people);

// Step 5: Add my name to the end of the array
people.push("Mohannad");
console.log(people);


// Step 6: Make a copy of the array excluding "Mary" and "Matt"
let copyPeople = people.slice(2);  // Copy from index 2 to the end
console.log(copyPeople);

// Step 7: Find the index of "Mary"
let indexMary = people.indexOf("Mary");
console.log(indexMary);

// Step 8: Find the index of "Foo" (this should return -1)
let indexFoo = people.indexOf("Foo");
console.log(indexFoo);

// Step 9: Redefine the people array to original values
people = ["Greg", "Mary", "Devon", "James"];
console.log(people);

// Step 10: Remove "Devon" and add "Elizabeth" and "Anna"
people.splice(2, 1, "Elizabeth", "Anna");  // Remove 1 element at index 2 and add new names
console.log(people);

//


// Multidimensional array
let arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
];

// Log the desired elements to the console
console.log(arr[1][1]); //11
console.log(arr[4][2]); //25
console.log(arr[5][3]); //17
console.log(arr[2][3]); //27
console.log(arr[2][1]); //0

//

let sentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its$HTML$tag.$A$component$cannot$directly$modify$any$properties$passe$d$to$it,$but$can$be$passed$callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties$flow$down;$actions$flow$up";

let structuredSentence = sentence.replace(/\$/g, ' ')
console.log(structuredSentence);
confirm(structuredSentence)