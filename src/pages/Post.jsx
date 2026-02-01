import { useContext, useState } from "react"
import ThemeContext from "../config/ThemeContext"
import NavigationBar from "../components/NavigationBar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Sidebar from "../components/Sidebar"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import axiosInstance from "../config/axiosInstance"
import { useNavigate } from "react-router-dom"
import BottomNavigationBar from "../components/BottomNavigationBar"
import LatestUsersCard from "../components/LatestUsersCard"

function Post() {

  const { theme } = useContext(ThemeContext)

  const [post, setPost] = useState('')

  const navigate = useNavigate()

  const handlePost = async (e) => {
    e.preventDefault()
    const postResponse = await axiosInstance.post('/api/create-post', {post})
    if(postResponse.status === 201)
      navigate('/home')
  }

  return (
    <>
      <NavigationBar />
      <Container>
        <Row className="pt-4">
          <Col className="d-none d-sm-block col-2">
            <Sidebar />
          </Col>
          <Col>
            <Form onSubmit={handlePost}>
              <Form.Group className="mb-3" controlId="createPost">
                <Form.Control style={{ resize: "none" }} as="textarea" rows={4} placeholder="What's on your mind?" onChange={(e) => setPost(e.target.value)} required />
              </Form.Group>
              <Button variant={theme === 'dark' ? 'light' : 'dark'} type="submit">Post</Button>
            </Form>
          </Col>
          <Col className="d-none d-lg-block col-lg-4 col-xxl-3">
            <LatestUsersCard />
          </Col>
        </Row>
      </Container>
      <BottomNavigationBar />
    </>
  )
}

export default Post