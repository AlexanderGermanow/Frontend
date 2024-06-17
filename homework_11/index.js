//Напишите фукнцию, которая будет принимать массив. Массив может содержать любые 
//строки и числа. Функция должна вернуть объект, который содержит свойства, ключ и 
//значение которых равны соответствующему элементу массива. 
//Пример работы функции:
//['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }

const array1 = ['a', '36.6', 'John Doe'];

function arrayToObject(arr) {
    const object = {};
    for (let i = 0; i < arr.length; i++) {
        object[arr[i]] = arr[i];
    }
    return object;
}

console.log(arrayToObject(array1));

const arraysWithDoubleElements = [
    ['height', 180],
    ['weight', 70],
    ['sport', 'regbi'],
    ['full name', 'John Doe'],
    ['sing', 'love'],
    ['speed', 90],
];

function makeNewObject(arraysWithDoubleElements) {
    const obj1 = {};
    for (let i = 0; i < arraysWithDoubleElements.length; i++) {
        obj1[arraysWithDoubleElements[i][0]] = arraysWithDoubleElements[i][1];
    }
    return obj1;
}

console.log(makeNewObject(arraysWithDoubleElements));