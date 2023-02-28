console.log("hello, world");
// Welcome, new coder. Enter your code on line 2 to print 'Hello, World!' to the console (the panel on the right)
console.log('Hello, World');
console.log("Hello, computer!");

/* this is 
a multi-line
sentence */

console.log(typeof 2023);
console.log(typeof "233");
console.log(typeof "the world\nnow");
console.log("does", "space", "matter");
console.log("Star" + "Wars");
console.log("Bruce's beard");
console.log(Number("2345"));
console.log(typeof Number("2345"));
console.log(Number(2345));
console.log(typeof String("23bottles"));

let programmingLanguage;
programmingLanguage = "Javascript";
console.log(programmingLanguage);

let day = "Thursday";
console.log(day);
day = 325;
day = 21;
console.log(day);

let a;
a = 42;
a = a + 3;
console.log(a);

const appName = "Get It Done";

console.log(appName);

console.log(1 + 1);

let sum = 1 + 2;
console.log(sum);

console.log(2 * 3); // multiply //
console.log(2 ** 3); // exponentiation //
console.log(5000 / 1000); // divide //
console.log(13 % 4); // modulus //
console.log(16 - 2 * 5 / 3 + 1);
console.log(1 + 5 % 3);
console.log(2 ** 2 ** 3 * 3);
console.log("3" + "3");

let x = 2
x += x + 2; // += is addition shorthand operator for x = x + 2 //
console.log(x)
/* 
+= addition
-= subtraction
*= multiple
/= divide
*/


let minutes = "500";
let hours = minutes / 60;
console.log(hours);

let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
let mph = 0.621;
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof mph);

let milesToMars = distanceToMarsKm + mph;
let hoursToMars = distanceToMarsKm / mph;
let daysToMars = hoursToMars / 24; 
console.log(shuttleName + "will take" + hoursToMars + "days to reach Mars." );

let date = "Monday 2019-3-7";
let time = "10:05:34 AM";
console.log("__________________________________")

console.log(">LC04-Launch Checklist");
console.log("__________________________________")
console.log("date: " + date);
console.log("time: " + time);

console.log(typeof true); //boolean//
console.log(typeof false);//boolean//
console.log(typeof "true"); //string//

console.log(5 == 5 ); // == is a comparison operator //
console.log(5 ==6 );





// prompt for readline-sync //
const input = require('readline-sync');
let num1 = input.question("Enter a number: ");
let num2 = input.question("Enter another number: ");
console.log(num1 + num2);

// input can be changed to another name to be stored in //
const otherName = require('readline-sync');
let name1 = input.question("Enter your first name: ");
let name2 = input.question("Enter your last name: ");
console.log(name2 + name1);
// input function treats everything like a string //



