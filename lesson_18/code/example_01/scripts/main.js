//const fetchRes = fetch('https://api.github.com/users/facebook');

//fetchRes
//.then()
//.catch()
//.finally()

fetch('https://api.github.com/users/facebook')
.then(
    (response) => {
        return response.json();
    }
)

.then(
    (data) => {}
)
.catch(
    (error) => {console.error(error)}
)
.finally(
    () => {console.log('Finaly')}
)

console.log("Hello world!")


