const axios = require("axios");

export const getData = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
}

