import axiosInstance from "./axiosInstance"
import socket from './socket.js'

const logoutFunction = async (setUser, navigate) => {
    try {
        const logoutResponse = await axiosInstance.post('/logout')
        if(logoutResponse.status === 200) {
            setUser(null)
            socket.disconnect()
            localStorage.removeItem('isLoggedIn')
            navigate('/')
        }
    } catch (err) {
        console.error('Logout failed: ', err)
    }
}

export default logoutFunction