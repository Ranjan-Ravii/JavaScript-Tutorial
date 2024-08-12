const newUser = {
    userName : {
        fullName :{
            fisrtName : "Sam",
            lastName : "karan"
        }
    },
    address : {
        housNo :" S-280",
        city : "Laxmi Nagar, new Delhi"
    }    
}

// console.log(newUser);
// console.log(newUser.userName.fullName);
// console.log(newUser.address);
// console.log(newUser.address.city);


// merging two objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

// const obj3 = {obj1, obj2}                              // simply method of joining objects
// let obj3 = Object.assign({}, obj1, obj2)              // Object.assign(target, source) ==>> copies all the source object into target object and returns target object.
let obj3 = {...obj1, ...obj2}                            // by spread method
console.log(obj3);




//           ************* Array of objects *******************

const users = [
    {
        id : 12,
        email : "r@gmail.com"
    },
    {
        id : 13,
        email : "a@gmail.com"
    },
    {
        id : 14,
        email : "v@gmail.com"
    },
    {
        id : 15,
        email : "i@gmail.com"
    }

]

console.log(users[1])