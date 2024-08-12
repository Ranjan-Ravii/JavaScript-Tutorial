// craete and comsume a promise

 
const promiseOne = new Promise(function(resolve, reject){
    // do an async operation
    // DB call, or any operations

    setTimeout(function(){
        console.log("Async task completed");  
        resolve()      
    },1000)
})

promiseOne.then(function(){
    console.log("promise comsumed")
})
 
 
// aternalty the same task can be done without creating a variable of promise 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 completed");
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2 comsumed");
    
})
 

 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Chai", email : "chai@example.com" })
    }, 1000);
})

promiseFour.then(function(user){
    console.log(user)
    console.log(user.username)
})
 


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;   
        if(!error){
            resolve({username : "Sam", email : "sam@example.com"})
        }else{
            reject('Error : something went wrong')
        }
    }, 1000);
})

promiseFive.then(function(user){
    // console.log(user)
    return user.username;  
}).then((myUsername) =>{
    console.log(myUsername);
}).catch((err)=> { 
    console.log(err);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
    
})
 
 
// another approch using async await
const promiseSix = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "javascipt", password: "123" })
        } else {
            reject("ERROR : js went wrong")
        }
    }, 1000);
})

async function consumePromisesix() {
    try {
        const reponse = await promiseSix
        console.log(reponse)
    } catch (error) {
        console.log(error);

    }
}

consumePromisesix()
 

 
// fetching API data using async await
async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // console.log(data);
    } catch (error) {
        console.log("E ", error);
    }
}

getAllUser()
 

// fetching API data using .then & .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
}).then((data) => {
    // console.log(data);
}).catch(() => {
    console.log("Error");
    
})