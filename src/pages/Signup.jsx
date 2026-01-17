import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import axiosInstance from "../api/axiosInstance"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Signup({theme}) {
  const [username, setUsername] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    const newUser = {
      username,
      displayName,
      password,
      confirmPassword
    }
    const signupResponse = await axiosInstance.post('/api/signup', newUser)
    console.log(signupResponse.data)
    if(signupResponse.status === 201)
      navigate('/')
  }

  return (
    <Row className="align-items-center justify-content-center" style={{height: '100vh'}}>
      <Col className="col-3">
        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDisplayName">
            <Form.Label>Display Name</Form.Label>
            <Form.Control type="text" placeholder="Enter display name" onChange={(e) => setDisplayName(e.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required/>
          </Form.Group>
          <Button variant={theme === 'dark' ? 'light' : 'dark'} type="submit">Signup</Button>
        </Form>
        <div className="text-muted">Already have an account? <Link to="/" className={theme === 'dark' ? 'link-light' : 'link-dark'}><b>Login</b></Link></div>
      </Col>
    </Row>
  )
}

export default Signup