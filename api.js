axios
.get("https://api.github.com/users/ingrydshirlley")
.then(function (response) {
    console.log(response.data)
    console.log(response.data.login)
})
.catch(function (error) {
    console.log(error)
})
