// for of ==>> this is iterative that doesn't need explicitly declaration of start, termination and increment. And can be applied on string or aaray 

const myString = "HELLO WORKD!"
const myArray = [1,2,3,4,5]
for (const str of myString) {
    if(str == " "){ 
        console.log(" ");
        continue
    }
    // console.log(str)
}
for (const arr of myArray) {
    if(arr == " "){
        console.log(" ");
        continue
    }
    // console.log(arr)
}


// MAPS  

const map = new Map()

map.set('IN', "india")
map.set('FR', "France")
map.set('CH', "china")

for (const key of map) {   // prints each itearation in array
//  console.log(key)
}


for (const [key, value] of map) {  // destructuring of array with key and value
    // console.log(key, ":-",value)
}


// forIN itrrative  (for object and array)

const myArray2 = ["Rb", "JS", "CPP","Py","C#"]

for (const key in myArray2) {
    // console.log(key);         // direclty print key 
    // console.log(myArray2[key]);  // direclty print values of key 
}


const myObject = {
    Rb : "Ruby",
    JS : "Javascript",
    CPP : "C Plus Plus",
    Py : "Python",
    C : "C hash"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
}


// forEach

const coding = ["Rb", "JS", "CPP","Py","C#"]

coding.forEach(function (val){
    console.log(val);
})


coding.forEach( (val)=> {
    console.log(val);
    
})

// accessing items of an object in an array
const myCoding = [
    {
        language : "javaScript",
        fileName : "js"
    },
    {
        language : "python",
        fileName : "py"
    },
    {
        language : "ruby",
        fileName : "rb"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.language);
})