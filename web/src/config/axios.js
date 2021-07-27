import axios from 'axios'

const clienteAxios = axios.create({
  baseURL: 'http://localhost:8080/',
})

export default clienteAxios
