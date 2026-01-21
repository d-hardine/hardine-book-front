import { useContext } from "react"
import UserContext from "../config/UserContext"
import NavigationBar from "../components/NavigationBar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Sidebar from "../components/Sidebar"
import Image from "react-bootstrap/Image"
import profilePicturePlaceholder from '../assets/placeholder-image.png'

function Profile() {

  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <NavigationBar />
      <Container>
        <Row className="pt-4">
          <Col className="col-2">
            <Sidebar />
          </Col>
          <Col className="col-9">
            <Image src={profilePicturePlaceholder} width='220px' thumbnail />
            <div>@{user.username}</div>
            <div className="text-muted">{user.name}</div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Profile