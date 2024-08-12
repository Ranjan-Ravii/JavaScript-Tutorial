const user = {
    name : "sam",
    email : "sam@gmail.com",
    isloggedin: false,

    welcomeMessage : function(){
        console.log(`${this.name}, welcome to the website.`) //here this is being used as object method (means in current context.)
        console.log(this)                    //here this this being used as globle context, 
    }
}

// user.welcomeMessage()
user.name = "ravi"                
// user.welcomeMessage()


// ************ diffent ways of declaring a function ****************

function first(){
    let fName  = "Sam"               //fName is variable with block- scoped variable, so here it will return "undefined when function is called"
    console.log(this.fName)          // because The `this` keyword inside the function refers to the global object

}


function first(){
    fName  = "Sam"                   //fName is variable with global- scoped variable, this.fName will be able to access the fName property. 
    console.log(this.fName)

}

const second = function(){
    let lName = "Karan"
    console.log(this.lName)
}

const third = () => {
    username = "Ravi"
    console.log(this.username)
}


// first()
// second()
// third()



// ************** Implicit and explicit declararion of arrow function  ******************


// Implicit declaration is simply the declaration of function with declaring "return" 
// in explicit declararion we do not need to specify the return keyword, whatever is needed to be returned it is placed just after the arrow in same line.


const sum = (num1 , num2 ) =>{
    ans = num1 + num2
    return ans
}

const diff = (num1, num2) => (num1 - num2)

console.log(sum(5,2))  //7
console.log(diff(5,2)) // 3