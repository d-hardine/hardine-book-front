import ListGroup from "react-bootstrap/ListGroup"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Image from 'react-bootstrap/Image'
import homeIconWhite from '../assets/home-icon-white.svg'
import homeIconBlack from '../assets/home-icon-black.svg'
import './Sidebar.css'
import { useContext } from "react"
import ThemeContext from "../config/ThemeContext"

const Sidebar = () => {

    const path = window.location.pathname

    const { theme, setTheme } = useContext(ThemeContext)

    /*
            <ListGroup>
                <ListGroup.Item className="fs-4 p-4 d-flex align-items-center gap-2" as={Link} to="/home" action active>
                    <Image src={theme === 'dark' ? homeIconWhite : homeIconBlack} width={'30px'}/>
                    Home
                </ListGroup.Item>
                <ListGroup.Item className="fs-4 p-4" as={Link} to="/profile" action>Profile</ListGroup.Item>
                <ListGroup.Item className="fs-4 p-4" as={Link} to="/message" action>Message</ListGroup.Item>
                <ListGroup.Item className="fs-4 p-4" as={Link} to="/post" action>Post</ListGroup.Item>
            </ListGroup>
    */

    return (
        <ul>
            <CustomLink to="/home" className={['text-decoration-none', theme === 'dark' ? 'link-light' : 'link-dark'].join(' ')}>
                <div className="fs-3">Home</div>
            </CustomLink>
            <CustomLink to="/profile" className={['text-decoration-none', theme === 'dark' ? 'link-light' : 'link-dark'].join(' ')}>
                <div className="fs-3">Profile</div>
            </CustomLink>
            <CustomLink to="/message" className={['text-decoration-none', theme === 'dark' ? 'link-light' : 'link-dark'].join(' ')}>
                <div className="fs-3">Message</div>
            </CustomLink>
            <CustomLink to="/post" className={['text-decoration-none', theme === 'dark' ? 'link-light' : 'link-dark'].join(' ')}>
                <div className="fs-3">Post</div>
            </CustomLink>
        </ul>
    )
}

function CustomLink({to, type, children, ...props}) {
    const resolvedPath = useResolvedPath(to) //retrieve absolute path of the page
    const isActive = useMatch({path: resolvedPath.pathname, end: true}) //end TRUE to make sure to match the absolute path, not relative
    return (
        <li className={["list-unstyled", isActive ? "active" : ""].join(" ")}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Sidebar