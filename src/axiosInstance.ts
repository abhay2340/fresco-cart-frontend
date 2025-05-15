// src/api/axiosInstance.ts
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081', // 👈 change this to your backend server
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
