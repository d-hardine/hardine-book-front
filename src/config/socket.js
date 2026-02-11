import { io } from 'socket.io-client'

const url = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
const socket = io(url, {autoConnect: false})

export default socket