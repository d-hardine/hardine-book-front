import { useContext, useState } from "react"
import UserContext from "../config/UserContext"
import NavigationBar from "../components/NavigationBar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Sidebar from "../components/Sidebar"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import profilePicturePlaceholder from '../assets/placeholder-image.png'
import axiosInstance from "../config/axiosInstance"

function Profile() {

  const { user, setUser } = useContext(UserContext)

  const [newImage, setNewImage] = useState()

  const handleChangeImage = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", newImage)
    console.log(formData)
    const uploadImageResponse = await axiosInstance.post('/api/upload-image', formData)
    console.log(uploadImageResponse.data)
  }

  return (
    <>
      <NavigationBar />
      <Container>
        <Row className="pt-4">
          <Col className="col-2">
            <Sidebar />
          </Col>
          <Col className="col-9 d-flex gap-3">
            <div className="profile-image-container">
              <Image src={profilePicturePlaceholder} width='220px' thumbnail />
              <br />
              <Form onSubmit={(e) => handleChangeImage(e)} encType="multipart/form-data">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Pick your new profile picture file below</Form.Label>
                  <Form.Control type="file" name="new-profile-picture" onChange={(e) => setNewImage(e.target.files[0])} required/>
                </Form.Group>
                <Button type="submit" variant="light">Change Image</Button>
              </Form>
            </div>
            <div className="profile-info-container">
              <div className="fs-2">{user.name}</div>
              <div className="text-muted mb-3">@{user.username}</div>
              <div>Your Bio Here</div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Profile