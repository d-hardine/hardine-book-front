import { Link } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../config/UserContext"

function Profile() {

    const { user, setUser } = useContext(UserContext)

    return (
        <>
            <div>Your Profile Here, hello {user.name}!</div>
            <Link to="/home">go to home page</Link>
        </>
    )
}

export default Profile