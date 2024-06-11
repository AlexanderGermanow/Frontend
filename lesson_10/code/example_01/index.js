// functions
// 1. Function declaration

// hoisting
function printHello(name = 'Patrik') {
    const fullString = 'Heloo ' + name;
    return fullString;
}


const resultFuctionPrintHello = printHello();
console.log(resultFuctionPrintHello);

// 2. Function expression

const printHelloAlternative = function(name = 'Patrik') {
    const fullString = 'Heloo ' + name;
    return fullString;
}


const resultFuctionPrintHelloAlter = printHelloAlternative();
console.log(resultFuctionPrintHelloAlter);

// 3. Arrow functions
const printHelloArrow = (name = 'Patrik') => {
    const fullString = 'Hello ' + name;
    return fullString;
}

const nameJ = "John";
const resultFuctionPrintHelloArrow = printHelloArrow(nameJ);
console.log(resultFuctionPrintHelloArrow);

//  сокращение стрелочной функции
const printHelloArrowShort = name => 'Hello ' + name;
console.log(printHelloArrowShort('David'));