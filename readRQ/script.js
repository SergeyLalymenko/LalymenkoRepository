const URL = 'https://5f4cdc1ceeec51001608e4c8.mockapi.io/login';

fetch(URL)
    .then((res) => res.json())
    .then((data) => console.log(data));