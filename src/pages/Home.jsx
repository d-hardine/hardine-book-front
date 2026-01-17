import { Link, useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"
import logoutFunction from "../config/logoutFunction"

function Home({setUser}) {

    const navigate = useNavigate() //THIS IS ESSENTIAL FOR LOGOUT FUNCTION

    return (
        <>
            <div>You're logged in</div>
            <Link to="/profile">go to profile page</Link>
            <Button onClick={() => logoutFunction(setUser,navigate)}>logout test</Button>
        </>
    )
}

export default Home