import axiosInstance from "./axiosInstance"

const logoutFunction = async (setUser, navigate) => {
    try {
        const logoutResponse = await axiosInstance.post('/api/logout')
        if(logoutResponse.status === 200) {
            setUser(null)
            sessionStorage.clear()
            navigate('/')
        }
    } catch (err) {
        console.error('Logout failed: ', err)
    }
}

export default logoutFunction