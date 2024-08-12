// for of ==>> this is iterative that doesn't need explicitly declaration of start, termination and increment. And can be applied on string or aaray or object

const myString = "HELLO WORKD!"

for (const str of myString) {
    if(str == " "){
        continue
    }
    console.log("str")
}