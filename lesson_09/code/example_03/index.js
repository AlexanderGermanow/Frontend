// loops

const arr1 = [1, 4, 98, "abc", null, undefined, [1, 2, 3]];
arr1.length;


for (let i = 0; i < 5; i++) {
    console.log(i);
}


let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//

for (let i = 0; i < 7; i++) {
    console.log(arr1[i]);
}

//
// const arrWithRandoms = [];

const arrWithRandoms = [];
for (i = 0; i < 5; i++) {
    const newElement = arrWithRandoms.push(Math.random() * 10);
}
console.log(arrWithRandoms);

const arr2 = [];
let a = 10;
for (let i = 0; i < a; i++) {
   let a = (Math.random() * 10);
   arr2.push(a);
}
console.log(arr2, arr2.length)


// 

// if
// math
// %
// let minutes = 0 - 59;
let minutes = 35;

if (minutes < 15 ) {
    console.log('first')
}
else if ( minutes > 15 && minutes < 30) {
    console.log('second')
}
else if ( minutes > 30 && minutes < 45) {
    console.log('third')
} else {
    console.log('fourth')
}


let minute = 35;

if (minutes < 15) {
    console.log(1)
 } else if ( minutes < 30) {
    console.log(2)
 } else if ( minutes < 45) {
    console.log(3)
 } else {
    console.log(4)
 }

//let numbberOfQ = Math.ceil(minutes/15);

 //console.log(numbberOfQ + " viertel");
 //console.log(`${numbberOfQ} viertel`);

 // Rodion

let minutes1 = 27;
let quarter1 = Math.floor(minutes1 / 15) + 1;
// if (quarter1 > 4) {
//     return (
//         console.log("Minutes should be in the rande of 0 to 59."))
// }
console.log((`The minute ${minutes1} is in the ${quarter1} quarter of the hour.`));
 //console.log(("The minute" + minutes1 " is in the " +  quarter1 + "quarter of the hour"));