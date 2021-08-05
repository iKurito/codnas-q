import axios from 'axios'
import { API_BASE_URL } from '../constants'

const clientAxios = axios.create({
  baseURL: API_BASE_URL,
})

export default clientAxios
