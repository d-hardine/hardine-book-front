import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Image from 'react-bootstrap/Image'
import logo from '../assets/information-svgrepo-com.svg'

function Auth() {
  return (
    <Row className="align-items-center justify-content-center" style={{height: '100vh'}}>
      <Col className="d-none d-md-block col-9 text-center">
        <h2><b>Hardine Book</b></h2>
        <h5>Always Connected, Anywhere You Are.</h5>
        <Image src={logo} width={'500px'} className="text-center"/>
      </Col>
      <Col>
        <div className="mb-3">Welcome back! We've been waiting for you.</div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="light" type="submit">Login</Button>
        </Form>
        <div className="text-muted">Don't have an account? <b>Sign up here</b></div>
      </Col>
    </Row>
  );
}

export default Auth