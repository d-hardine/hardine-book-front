import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Button from "react-bootstrap/Button"

function Home({setUser, setIsLoading}) {

    //Backend URL
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const logoutResponse = await axios.post(`${API_BASE_URL}/api/logout`, { withCredentials: true })
            if(logoutResponse.status === 200) {
                setUser(null)
                setIsLoading(true)
                navigate('/')
            }
        } catch (err) {
            console.error('Logout failed: ', err)
        }
    }
        
    return (
        <>
            <div>You're logged in</div>
            <Link to="/profile">go to profile page</Link>
            <Button onClick={handleLogout}>logout test</Button>
        </>
    )
}

export default Home