
const callBF = (n) => {
    console.log(`Hello world ${n}`);
    const paragrafElement = document.querySelector
    constparagrafElement.textContent = n;
} 

// setTimeout(callBackFunction, 6000);
//const intervalID = setInterval(callBF, 1000);

//setInterval(callBF, 1000);

//const stopInt = () => {
//  clearInterval(intervalID);
//}


//setTimeout(stopInt, 6000);

const intervalQ = (num, callback) => {
    let counter = 0;
    const callbackModified = () => {
        counter++;
        callback(counter);
        if (counter >= num) {
            clearInterval(intervalID)
        }
    }
    const intervalID = setInterval(callbackModified, 1000);
}
intervalQ(4, callBF);