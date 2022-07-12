/*
// 32. Activating Strict Mode
'use strict';


let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('i can drive :D');

let gosiktheb = true;
const hasaticket = false;

if (hasaticket) gosiktheb = true;
console.log('i can go concert')

// const interface = 'Audio';
// const private = 534;
// const if = eat;

// 33. Functions

function logger() {
    console.log("my name is new");
}

// 함수 호출 이렇게 가능!
logger(); 
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const applejuice = fruitProcessor(4, 0); // 함수를 변수에 저장해서 변수로 함수를 출력하는 경우
console.log(applejuice);
console.log(fruitProcessor(5, 0)); // 그냥 함수 그대로 로직을 출력하는 경우

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// 34. Function Declarations vs. Expressions


/// function declaration
function calcAge1(birthYear) {
    // const age = 2022 - birthyear;
    // return age;
    return 2022 - birthYear;
}
const age1 = calcAge1(1999);
console.log(age1);

// function expression 
const calcAge2 = function (birthYear) { // function 이름 없는 경우
    return 2022 - birthYear;
}
const age2 = calcAge2(1999);

console.log(age1, age2);


// 35. Arrow Functions

const calcAge3 = birthYear => 2022 - birthYear; 
const age3 = calcAge3(1999);
console.log(age3);

const yearUntilRetirement = (birthYear, firstname) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstname} retires in ${retirement} years`; 
}

console.log(yearUntilRetirement(1999));
console.log(yearUntilRetirement(1999, 'yura'));

// 36. Functions Calling Other Functions

function cutfruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutfruitPieces(apples);
    const ornagePieces = cutfruitPieces(oranges);

    const juice = `juice with ${applePieces} piece of apples and ${ornagePieces} piece of oranges`;
    return juice;

}
console.log(fruitProcessor(2, 3));
*/

// 37. Reviewing Functions
