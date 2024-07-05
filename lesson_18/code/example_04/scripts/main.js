fetch('https://api.github.com/users/facebook')
.then(
    (response) => {
        console.log(response);
        return response.json();
    }
)
.catch((error) => {console.error('fkdk', error)})
.then(
    (data) => {
        console.log(data)
    }
)
.catch(
    (error) => {console.error(error)}
)
.finally(
    () => {console.log('Finally')}
)
console.log("Hello world")

const url = 'https://api.github.com/users/facebook'

function promis(url) {
    return fetch(url).then(response.json)
}

promis
.fetch(
    (data) => {console.log(data);}
)
.catch(
    (error) => {console.error(error)}
)