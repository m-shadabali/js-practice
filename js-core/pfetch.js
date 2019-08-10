const f = fetch("https://jsonplaceholder.typicode.com/users").then((response) => {


if (response.ok){
    return response.json();
}
throw new Error('Failed !');
}).then((data) => {
    console.log(data)
})