import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import ThemeContext from "../config/ThemeContext"
import { useContext } from "react"

function BottomNavigationBar() {

  const { theme } = useContext(ThemeContext)

  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'light'} fixed='bottom' className='d-sm-none'>
      <Container>
        <Nav className="m-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/message">Message</Nav.Link>
          <Nav.Link as={Link} to="/post">Post</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default BottomNavigationBar