import axiosInstance from "./axiosInstance"
import socket from './socket.js'

const logoutFunction = async (setUser, navigate) => {
    setUser(null)
    socket.disconnect()
    localStorage.removeItem('isLoggedIn')
    navigate('/', { replace: true })
    try {
        const logoutResponse = axiosInstance.post('/logout') // request in background without "await" 
        if(logoutResponse.status === 200) {
            console.log('logged out successfully')
        }
    } catch (err) {
        console.error('Logout failed: ', err)
    }
}

export default logoutFunction