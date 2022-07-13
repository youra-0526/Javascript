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

// 37. Reviewing Functions

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstname) {
    const age = 2022 - birthYear;
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`);
        return retirement; // console.log 먼저 한 다음에 return 해줘야 함
    } else {
        console.log(`${firstname} has already retired`);
        return -1;
    }
}

console.log(yearUntilRetirement(1999, 'yura'));
console.log(yearUntilRetirement(1960, 'heo'));


// 38. Coding Challenge #1

// Data1 : Dolphins 44, 23, 71 / Koalas 65, 54, 49
// Data2 : Dolphins 85, 54, 41 / Koalas 23, 34, 27


// my solution 
function calcAverage (score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins);
console.log(avgKoalas);

const winner = function (avgDolphins, avgKoalas) {
    const difference = (avgDolphins - avgKoalas);
    if (difference >= 0) {
        console.log(`Dolphins win(${avgDolphins} vs ${avgKoalas})`);
        return difference;
    } else {
        console.log(`Koalas win(${avgDolphins} vs ${avgKoalas})`)
        return difference;
    }
}
console.log(winner(30, 43));

// answer

const calcAverage = (a, b, c) => (a + b + c) / 3;
// 화살표 함수는 return할 필요가 없다
console.log(calcAverage(3, 4, 5));


// Test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win !! (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win !! (${avgKoalas} vs ${avgDolphins}')`);
    } else {
        console.log('no teams win...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(563, 43);

// Test 2

scoreDolphins = calcAverage (85, 54, 41);
scoreKoalas = calcAverage (23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


// 39. Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['chanhee', 'juyeon', 'hyunjae'];
console.log(friends);

const y = new Array(1999, 1998, 2001, 2002);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // 3
console.log(friends[friends.length -1]);  // 3 - 1  > friend(2)

friends[2] = 'Jay';
console.log(friends);

const lastname = 'heo';
const yura = [lastname, 'yura', 2022 - 1999, 'student', friends];

console.log(yura);
console.log(yura.length);

// Excercise 
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const years = [1999, 2000, 1996, 1998];

console.log(calcAge(years)); // Not a number

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// 40. Basic Array Operations (Methods)

const friends = ['yura', 'juyeon', 'younghoon'];
console.log(friends);


// Add Elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('sangyeon'); // 맨 앞에 추가
console.log(friends);

// Remove Elements
friends.pop(); // 맨 뒤부터 하나씩 삭제
const popped = friends.pop()
console.log(popped);
console.log(friends);

friends.shift();  // 맨 앞에 삭제
console.log(friends);

console.log(friends.indexOf('juyeon')); // indexof  숫자 알려줌
console.log(friends.indexOf('sunwoo')); // 없는거 넣으면 -1


friends.push(23);
console.log(friends);
console.log(friends.includes('sunwoo')); // includes랑 indexOf랑 비슷함
console.log(friends.includes('juyeon'));
console.log(friends.includes(23));

if (friends.includes('juyeon')) {
    console.log('you have a friends called juyeon');
}



// 41. Coding Challenge #2

// my solution

function calcTip (bill) {
    const tip1 = bill * 0.15;
    const tip2 = bill * 0.20;
    if (50 <= bill <= 300) {
        return tip1;
    } else {
        return tip2;
    }
}
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[1])];
console.log(tips)

const totals = [bills + tips]
console.log(totals);

// answer

const calctip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

}

// arrow function
// const calctip = bill => bill >= 60 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bill = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[1])];
console.log(tip);

const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
console.log(total);



// 42. Introduction to Objects
// object는 array랑 달리 순서가 별로 중요하지 않음
const yurasArray =  [
    'Yura',
    'Heo',
    2022 - 1999,
    'students',
    ['Chanhee', 'Hyunjae', 'Younghoon']
];

const yuras = {
    firstName: 'Yura',
    lastName: 'Heo',
    age: 2022 - 1999,
    job: 'student',
    friends: ['Chanhee', 'Hyunjae', 'Younghoon']
};


// 43. Dot vs. Bracket Notation

const yuras = {
    firstName: 'Yura',
    lastName: 'Heo',
    age: 2022 - 1999,
    job: 'student',
    friends: ['Chanhee', 'Hyunjae', 'Younghoon']
};
console.log(yuras);

console.log(yuras.lastName);
console.log(yuras['lastName']);

const nameKey = 'Name';
console.log(yuras['first' + nameKey]);
console.log(yuras['last' + nameKey]);

// console.log(yuras.'last' + nameKey); 에러나는 경우

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(yuras[interestedIn]);

if(yuras[interestedIn]) {
    console.log(yuras[interestedIn]);
} else {
    console.log('Wrong request!! Choose between firstName, lastName, age, job and friends')
}

yuras.location = 'Korea';
yuras['twitter'] = '@yuras';
console.log(yuras);

// Challenge 
// "Yuras has 3 friends, and her best friend is called Chanhee"
console.log(`${yuras.firstName} has ${yuras.friends.length} friends, and her best friend is called ${yuras.friends[0]}`);



// 44. Object Methods

const yuras = {
    firstName: 'Yura',
    lastName: 'Heo',
    birthYear: 1999,
    job: 'student',
    friends: ['Chanhee', 'Hyunjae', 'Younghoon'],
    hasDriversLicense: false,

    // calcAge: function(birthYear) {
    //     return 2022 - birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${yuras.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`

    }
};

console.log(yuras.calcAge());
console.log(yuras.calcAge());
console.log(yuras.age);
console.log(yuras.age);


// console.log(yuras.calcAge(1999));
// console.log(yuras['calcAge'](1999)); // 대괄호 안은 string이어야 함

// Challenge
// "Yura is a 24 years old student, and she dont has Driver's License"
console.log(yuras.getSummary());

*/

// 45. Coding Challenge #3

const millers= {
    fullName: 'MarkMiller',
    mass: 78,
    height: 1.69,

    calcbmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const johns= {
    fullName: 'JohnSmith',
    mass: 92,
    height: 1.95,

    calcbmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

// const getbmi = bmi => {
//     if (millers.calcbmi() > johns.calcbmi()) {
//         return `Miller's BMI(${millers.this.bmi} is higer than John's BMI(${johns.this.bmi} !) )`;
//     }
// }

millers.calcbmi(); // 이런식으로 call해줘야 object안에 있는 함수 사용가능
johns.calcbmi();
console.log(millers.bmi, johns.bmi);

// console.log
// console.log(millers);
// // console.log(millers.calcbmi());
// console.log(millers.bmi);
