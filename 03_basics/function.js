
function myName(){
    console.log("R");
    console.log("A");
    console.log("V");
    console.log("I");
}

// myName();       // calling of function

// ways of writing function and calling it.

// function addTwoNum(num1, num2){
//     let sum = num1 + num2;
//     console.log(sum);
// }

// addTwoNum(2,4);

function addTwoNum(num1, num2){
//    let result = num1 + num2;
//    return result

    return num1 + num2;
}

const result = addTwoNum(19,11);
// console.log("Result : ",result);


function loggedInUserMessage(username){
  
    if(username === undefined){                          // "username === undifined" is equivalent to "!username"
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in.`
}
// console.log(loggedInUserMessage());

// ***************** function 2nd lecture ****************




// write a functon for calculating cart pricing

function cartPricing (...num){               //using spred operator as a parameter, it simply take more than one arguments while function call and returns them in an array
}

// console.log(cartPricing(100,300,150,50));    // this function will give array of pricing and later on they can be added.


// passing an object in a function 

const user = {
    username : "sam",
    price : 390
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject({
    username : "atls",
    price  : 490
});


// passing arrays in function 

const myArray =  [200,400,500,400];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myArray))

console.log(`second element is ` ,returnSecondValue([200,400,500,400]));    