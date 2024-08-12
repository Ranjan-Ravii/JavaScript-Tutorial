const score = 100;

console.log(score);

const balance = new Number(100);
console.log(balance);

const newBalance = balance.toString();
console.log(newBalance);
console.log(typeof newBalance);

console.log(newBalance.length);
console.log(balance.toFixed(2))

console.log(typeof balance.toFixed(2));

const otherNumber = 234.986;
console.log(otherNumber.toPrecision(5));

// *********************** DATE ****************************

let myDate = new Date();
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());