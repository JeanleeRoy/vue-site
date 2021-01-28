import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://demo.ghost.io/ghost/api/v3/content/',
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },
    params: {
      key: '22444f78447824223cefc48062'
    }
  })
}