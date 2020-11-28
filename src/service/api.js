import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    }
  })
}