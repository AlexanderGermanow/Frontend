const strA = 'Hello, my little bro';

console.log(strA.length);
console.log(strA.toLowerCase());
console.log(strA.toUpperCase());

let substring = strA.substring(7, 9);
console.log(substring);

// const replacedString = strA.replacAll('Hello', 'Cao');

console.log(strA.replace('Hello', 'Cao'));
console.log(strA);
console.log(strA.trim());
strA[0] = 'h';
console.log(strA);