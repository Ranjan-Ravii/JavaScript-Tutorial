// // data types

// let namae = "Ravi";      // string
// let age = 19;            // number
// let isLoggedIn = false;  // booleen

// /*
// primitive data types 
//     number => 2 to power 53
//     bigint --> preferably used for big numbers, generally in stock and big companies.
//     string --> " "
//     booleen --> flase/true
//     null    --> standalone value 
//     undefined --> values not assigned 
//     symbol --> for uniqueness

    
// relative or Non Primitive data types.
//     arrays
//     object 
//     function 
    

// */

// console.log(typeof namae); // typeof returns the type of data types 

// console.log(typeof age);

// // *************************************** convirsion of datatypes ********************************************


// // 1. converting string to number and number to string.
// // 1(a). string to number.
// let score = "99";
// let scoreInNumber = Number(score);     // output will be converted into a number due to use of global method Number().
// console.log(typeof score);            // output is number.
// console.log(typeof scoreInNumber);      // and score2(string) has been chnaged into number.

// // note :- numeric string value changes to number i.e,  "3.14" into 3.14
// //         an empty strint chnages to null i.e, " " into 0
// //         and non numeric string changes to NaN (not a number) i.e, "john" into NaN

// let num = " ";
// let num1 = Number(num);    
// console.log(num1);

// /*
// Method	Description

// Number()     : 	Returns a number, converted from its argument
// parseFloat() :	Parses a string and returns a floating point number
// parseInt()	 :  Parses a string and returns an integer.
// */

// // 1(b). number to string.

// let score2 = 99;
// let score2InString = String(score2);

// console.log(typeof score2);
// console.log(typeof score2InString)

// // toString() does the same work. 

// let x = (99).toString();
// console.log(x);             // value of x is numeric string and datatype is string.
// console.log(typeof x);


// // 2. conveerting dates to number 

// let date = new Date();
// let dateInNumber =  Number(date);
// console.log(dateInNumber);

// let dateInString = String(Date(date));
// console.log(dateInString);

// // 3 conversion of blooleen into number / string. 

// let myVarF = false;
// let intoString = String(myVarF);
// let intoNumber = Number(myVarF);
// console.log(intoString);
// console.log(intoNumber);                             // numeric value of false = 0
// console.log(typeof intoString);
// console.log(typeof intoNumber);

// let myVarT = true;
// let intoStringT = String(myVarT);
// let intoNumberT = Number(myVarT);
// console.log(intoStringT);
// console.log(intoNumberT);                               // numeric value of true  = 1.
// console.log(typeof intoStringT);
// console.log(typeof intoNumberT);



// let index = 5;
// let sentance = "this is javascript lesson."
// console.log(sentance.charAt(index));
// console.log(`the char code at ${sentance.charCodeAt(index)} is equal to ${sentance.charAt(index)}`);

let str1 = "this is a question?";
// console.log(str1.length);
// console.log(str1.endsWith("question?",19));

let xyz = str1.indexOf("a") 
console.log(xyz);
console.log(str1.endsWith("a", xyz+1));

