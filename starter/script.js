/*

let js = 'amazing';
console.log(30 + 3 - 20 - 10);

console.log('jonas');
console.log(23);

let firstname = 'jos';


console.log(firstname);
console.log(firstname);
console.log(firstname);

let $function = 28;
console.log($function);
let name = "jonas";

let Person = 'chanhee'; // 변수명 첫글자에 대문자 쓰지 않음 오류는 안나는데 안쓴다
console.log(Person);

let PI = 3.14; // 변하지 않는 상수에 대문자를 쓴다.

let myFisrtJob = 'programmer';
let myCurrentJob = 'Teacher';

console.log(myFisrtJob);

let country = 'korea';
let continent = '?';
let population = 5000;

console.log(country);
console.log(continent);
console.log(population); 

// 12. Data types

true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 'yura');
console.log(typeof 23);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); // 재선언 해줘서 boolean > string 으로 type 바뀜

let year;
console.log(year);
console.log(typeof year); // type = undefined

year = 1991;
console.log(typeof year); // type = number

console.log(typeof null); // type = object

// Assignments
let isIsland = 'korea';
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);



// 13. let, const and var

let age = 30;
age = 31;  // let은 재할당 가능
console.log(age);

const birthYear = 1991;
// birthYear = 1990; // const는 재할당 불가능

// const job;
var job = 'programmer';
job = 'teacher';
console.log(job); // var도 재할당 가능

// const language = 'korean';
// console.log(language);
// language = 'english';
// console.log(language);

let fruit = 'apple';
console.log(fruit);
fruit = 'orange';
console.log(fruit);



// 14. Basic operators


// Math operators
const now = 2022;
const ageYura = now - 1999;
const ageJuyeon = now - 1998;
console.log(ageYura, ageJuyeon);

console.log(ageYura * 2, ageJuyeon / 2, 2 ** 3);

const firstname = 'yura';
const lastname = 'heo';
console.log(firstname + ' ' +  lastname);


// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
console.log(x);

// Comparison operators
console.log(ageYura > ageJuyeon);
console.log(ageJuyeon >= 19);

const isFullAge = ageYura > 19;





// 15. Operator Precedence

const now = 2022;
const ageYura = now - 1999;
const ageJuyeon = now - 1998;

console.log(now - 1990 > now - 1988);

 console.log(25 - 10 - 5);

let x, y; 
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageYura + ageJuyeon) / 2;
console.log(ageYura, ageJuyeon, averageAge);



// 16. Coding Challenge #1


const weight_Mark = 78;
const tall_Mark = 1.69;
const bmi_Mark = (weight_Mark / tall_Mark ** 2);

const weight_John = 92;
const tall_John = 1.95;
const bmi_John = (weight_John / tall_John ** 2);

console.log(bmi_John, bmi_Mark);
const markHigherBMI = (bmi_Mark > bmi_John);
console.log(markHigherBMI);



// 17. Strings and Template Literals

const firstname = 'Yura';
const job = 'student';
const birthYear = 1999;
const year = 2022;

const yura = "I'm " + firstname + ', a ' + (year - birthYear) + 'years old ' + job + ' !';
console.log(yura);

const yurasNew = `I'm ${firstname}, a ${year - birthYear} year old ${job} !`;
console.log(yurasNew);

console.log(`Just a regular strings...`);

console.log('String with \n\
multiple \n\
')

console.log(`String
multiple
lines`);

// 18. Taking Decisions: if / else Statements

const age = 1;
const isOldEnough = age >= 18; // boolean value

if (isOldEnough) {
    console.log('Sarah can start driving license 🎈');
} else {
    const yearsleft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsleft} year :)`);
}

const birthYear = 1999; 

let centry;
if (birthYear <= 2000) { 
    centry = 20;
} else {
    centry = 21;
}
console.log(centry); 


// 19. Coding Challenge #2

const weight_Mark = 78;
const tall_Mark = 1.69;
const bmi_Mark = (weight_Mark / tall_Mark ** 2);

const weight_John = 92;
const tall_John = 1.95;
const bmi_John = (weight_John / tall_John ** 2);

console.log(bmi_John, bmi_Mark);
const markHigherBMI = (bmi_Mark > bmi_John);
console.log(markHigherBMI);

if (bmi_Mark > bmi_John) {
    console.log("'Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!")
}

console.log(`Mark's BMI (${bmi_Mark}) is higher than John's(${bmi_John})`)

// 20. Type Conversion and Coercion


// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('yura')); // NaN not a number
console.log(typeof NaN); // number

console.log(String(23), 23);
console.log(typeof 23)

// Coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');

console.log('23' - '10' - 3); // string convert to number ? ok (-)
console.log('23' + '10' + 3); // string convert to number ? No (+)
console.log('23' * '2'); // string convert to number ? ok (*)

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

// 21. Truthy and Falsy Values

// 5 flasy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('yura')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 10;
if (money) {
    console.log("Dont spend it all");
} else {
    console.log('You should get a job');
}

let height; // undefined, =0 인 경우도 false
if (height) {
    console.log('yay!!! height is defined');
} else {
    console.log('height is undefined');
}

// 22. Equality Operators: == vs. ===

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)'); // {} 안써주고 이렇게 쓰는 것도 가능~

if (age == 18) console.log('You just became an adult :D (loose)');

const favorite = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // '23' == 23 > true '23' === 23 > false
    console.log('cool!, 23 is an amazing number');
} else if(favorite == 7) {
    console.log('7 is also a cool number');
} else {
    console.log('number is not 23 or 7');
}

if (favorite !== 23) console.log('why not 23?');




// 23. Boolean Logic

// 24. Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('yura is able to drive!');
// } else {
//     console.log('someone else sholud drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('yura is able to drive!');
} else {
    console.log('someone else sholud drive...');
}



// 25. Coding Challenge #3

// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 445 + 23) / 3;
// console.log(dolphins, koalas);

// if (dolphins > koalas) {
//     console.log('Dolphins win!!!');
// } else if (dolphins < koalas){
//     console.log('Koala win!!!');
// } else if (dolphins === koalas) {
//     console.log('both team win!!');
// } else {
//     console.log('no one has trophy');
// } 

// Bonus 1
const dolphins = (97 + 112 + 101) / 3;
const koalas = (109 + 95 + 123) / 3;
console.log(dolphins, koalas);

if (dolphins > koalas && dolphins >= 100) {
    console.log('Dolphins win!!!');
} else if (dolphins < koalas && koalas >= 100){
    console.log('Koala win!!!');
} else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
    console.log('both team win!!');
} 



// 26. The swith Statement 스위치문

const day = 'sunday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wendsday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');

} else if (day === 'tuesday') {
    console.log('Prepare theory videos');

} else if (day === 'wendsday' || day === 'thursday') {
    console.log('Write code examples');

} else if (day === 'friday') {
    console.log('Record videos');

} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');

} else {
    console.log('Not a valid day');
}



// 27. Statements and Expressions

3 + 5
1991 
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
} 

const me = 'yura'
console.log(`i'm ${2039 - 1994} years old ${me}` )

// 28. The Conditional (Ternary) Operator

const age = 26;
age >= 25 ? console.log('I like to drink wine 🍷') :
console.log('i like to drink water 💧');

const drink = age >= 19 ? 'wine🍷' : 'water💧';
console.log(drink); 

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`i like to drink ${age >= 19 ? 'wine🍷' : 'water💧'}`)

// 29. Coding Challenge #4

*/

// 30. JavaScript Releases: ES5, ES6+ and ESNext


