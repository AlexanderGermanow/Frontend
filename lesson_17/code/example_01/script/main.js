//
console.log('Script start');
const result = prompt('Введите ваш возраст');
console.log(`Введённый возраст ${result}`);

//
console.log('Script start');
const inputElement = document.querySelector('#age');
document.querySelector('#ok_btn').addEventListener('click', okHandler);


function okHandler() {
    const result = inputElement.ariaValueMax;
    console.log(result);
}

console.log(`Введённый возраст ${result}`);

// promise
const firstPromise = new Promise(
    //     (resolve) => {
    //         setTimeout(
    //             () => {resolve(true)}, 20000
    //         )
    // }
    (resolve) => {
      const inputElement = document.querySelector('#age');
      document.querySelector('#ok-btn').addEventListener('click', okHandlerInPromise);
      function okHandlerInPromise() {
        const result = inputElement.value;
        resolve(result);
      }
    }
  );
  firstPromise.then(promiseFullfilled);
  function promiseFullfilled(a) {
    console.log(a);
  }