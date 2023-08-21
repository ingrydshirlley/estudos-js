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

/*FETCH JS SEM USAR ASYNC/AWAIT 

const api = `https://api.github.com/users/iuricode`
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

*/

/*FETCH USANDO ASYNC/AWAIT 


*/



async function fetchUser(user) {
    const api = `https://api.github.com/users/${user}`

    const response = await fetch(api)
    const data = await response.json();
    console.log(data)
}

fetchUser("ingrydshirlley");
