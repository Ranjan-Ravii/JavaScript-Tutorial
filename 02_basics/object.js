// singleton

//--------------------- objects literals ( not a singleton object)---------------
const user = {
    name: "ravi",
    "full name": "ravi ranjan",
    age: 19,
    location: "delhi",
    email: "ravi@gmail.com",
    isloggedIn: "false"
}

// user.name                // this is the one way to access the data.
// user["nameOfString"]     // this method should be in preactice.


console.log(user.name);
console.log(user["name"]); 
console.log(user["email"])
console.log(user["full name"]);     // to access the full name we have only ways to access i,e. ["full name"].

// ques. take a symble and add it to the keys of object and print it.? 

const mySym = Symbol("key1");

const user2 = {
    name: "ravi",
    "full name": "ravi ranjan",
    age: 19,
    location: "delhi",
    email: "ravi@gmail.com",
    isloggedIn: "false",
    [mySym]: "myKey1",

}

console.log(user2[mySym]);
console.log(typeof user2[mySym]);

// chnaging data in object   (consideing ueser2 object )

user2.email = "ravi@google.com"; // changing emial in user2 object
user2.name = "atlas"             // chnaging name in user2 object
console.log(user2.name)
console.log(user2.email)

Object.freeze(user2);           // frreeze property freezes any change in object.
email = "atlasa@gmail.com"
age = 18;
console.log("changed email after freeze ",user2.email);
console.log(user2);


//***** adding a function in object (using user object i,e. the fisr one.) **********

user.greeting = function () {
    console.log("Hello User!");
}
console.log(user.greeting());

user.greetingtwo = function () {
    console.log(`Hello user! ${this.name}.`);
}

console.log(user.greetingtwo());



// ---------------- objects constructor (this is a singleton object) -----------------

const iguser = new Object();

iguser.id = "123abc"
iguser.name = "sunny"
iguser.isloggedIn = false

// console.log(iguser);


const regularUser = {
    email: "sam@gmail.com",
    name: {
        fullName: {
            firstName: "ravi",
            lastName: "ranjna"
        }
    }
}

// console.log(regularUser.name.fullName);


// merging diffrent objects into one object. 

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}
const obj3 = {5:"e", 6: "f"}

const obj4 = Object.assign({},obj1,obj2,obj3);    // object.assign method
console.log(obj4);

const obj5 = {...obj1, ...obj2,...obj3} ;         // spread method
console.log(obj5);

