import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import homeIconWhite from '../assets/home-icon-white.svg'
import homeIconBlack from '../assets/home-icon-black.svg'
import profileIconWhite from '../assets/profile-icon-white.svg'
import profileIconBlack from '../assets/profile-icon-black.svg'
import emailIconWhite from '../assets/email-icon-white.svg'
import emailIconBlack from '../assets/email-icon-black.svg'
import postIconWhite from '../assets/post-icon-white.svg'
import postIconBlack from '../assets/post-icon-black.svg'

function BottomNavigationBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky='bottom' className='d-sm-none'>
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default BottomNavigationBar