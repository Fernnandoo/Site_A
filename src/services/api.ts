import axios from 'axios'

const api = axios.create({
  baseURL: 'https://important-buckle-fly.cyclic.cloud',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export default api
