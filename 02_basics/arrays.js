
const myArray = [1,2,3,4,5];

const heros = ["ironman","thor","aquaman","flash"];

const myArray2 = new Array(4,5,6,7);

// console.log(myArray);
// console.log(heros);

// ************ Methods **************

myArray.push(6);
myArray.push("ravi");          // push method adds new element to the array.
// console.log(myArray);

myArray.unshift(7);
// console.log(myArray);          // unshift add the given element in the satring of array i,e. zero index. 

myArray.shift();
// console.log(myArray);          // shift method just removes zeoth elemrnt from the array. 

myArray.shift();
// console.log(myArray);

// some methods that are use like asking question
    includes()  // give booleen of entered string wheather it exists or not. 
    indexOf()   // retuens the element of an array at the specified index.
   
let newArray = myArray.join();
// console.log(myArray);               
// console.log(typeof myArray);        // type of an array is object
// console.log(newArray);             
// console.log(typeof newArray);

   // slice and splice

let arr1 = [1,2,3,4,5];

// console.log("A", arr1)

let arr2 = arr1.slice(1,3);
// console.log(arr2);
// console.log("B",arr1);

let arr3 = arr1.splice(1,3);
// console.log(arr3);


// //  *************** 02_Array *****************


// // .push
const marvel_heros =  ["ironman", "thor", "hulk"];
const dc_heros = ["superman", "flash","batman"];

marvel_heros.push(dc_heros);
// console.log(marvel_heros)
// console.log(marvel_heros[3][2]);

// .concat

let allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// // spread   syntax --> [...array1, ...aaray2]              // spread and concat works as same but you can add multiple number of arrays.

let allNewHeros = [...marvel_heros,...dc_heros];
// console.log(allNewHeros)


// // .flat   // it simply returns a new array with argumented depth of a given array.

const  array = [1,2,3,4,[5,6,7],2,3,[4,5,[2,3,[4,6,8],4]]];
const anotherArray = array.flat(Infinity);
// console.log(anotherArray)



// .of() method is a string converted into an array containing the same argument .

let score = 100 
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3))