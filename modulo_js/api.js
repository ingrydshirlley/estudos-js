/* FUNCAO USANDO AXIOS

    axios
.get("https://api.github.com/users/ingrydshirlley")
.then(function (response) {
    console.log(response.data)
    console.log(response.data.login)
})
.catch(function (error) {
    console.log(error)
})

*/

/* FETCH JS SEM USAR ASYNC/AWAIT 

function fetchUser(user) {
    const api = `https://api.github.com/users/${user}`
    fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.login);
            console.log(data.id);
            console.log(data.bio);
        })
        .catch(error => {
            console.error('Error fetching user:', error);
        });
}

fetchUser("ingrydshirlley");


*/

/* FETCH USANDO ASYNC/AWAIT 

async function fetchUser(user) {
    const api = `https://api.github.com/users/${user}`

    const response = await fetch(api)
    const data = await response.json();
    console.log(data)
}

fetchUser("ingrydshirlley");

*/



/* EXEMPLO PRATICO DE FUNCIONAMENTO

function primeiraFuncao () {
    console.log("segundo")
}

async function segundaFuncao () {
    await primeiraFuncao()
    console.log("primeiro")
}

segundaFuncao ()  

*/






