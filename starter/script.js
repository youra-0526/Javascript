

// 32. Activating Strict Mode

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive :D');

let gosiktheb = true;
const hasaticket = false;

if (hasaticket) gosiktheb = ture;
console.log('i can go concert')


/*
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
    const juice = `juice with ${apples} apples and ${oranges} oranges`
    return juice;
}
const applejuice = fruitProcessor(4, 0);
console.log(applejuice);



// 34. Function Declarations vs. Expressions


/// function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}

const age1 = calcAge1(1991);

// function expression 
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


// 35. Arrow Functions

const calcAge3 = birthYeah => 2048 - birthYeah; 
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYeah, firstname) => {
    const age = 2049 - birthYeah;
    const retirement = 66 - age;
    return retirement;
    return `${firstname} retires in ${retirement} years`; 
}

console.log(yearUntilRetirement(1991));

// 36. Functions calling Other Functions

function cutfruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutfruitPieces(apples);
    const ornagePieces = cutfruitPieces(oranges);

    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;

}
fruitProcessor(2, 3);

*/