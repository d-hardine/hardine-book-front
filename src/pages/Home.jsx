import axiosInstance from "../config/axiosInstance"
import UserContext from "../config/UserContext"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Container from "react-bootstrap/Container"
import NavigationBar from "../components/NavigationBar"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Sidebar from "../components/Sidebar"
import Image from "react-bootstrap/Image"
import { formatDistanceToNow } from "date-fns"

function Home() {

  const { user, setUser } = useContext(UserContext)

  const navigate = useNavigate()

  const [allPosts, setAllPosts] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const retrieveAllPosts = async () => {
      try {
        const retrieveResponse =  await axiosInstance.get('/api/all-posts')
        if(retrieveResponse.status === 200) {
          setAllPosts(retrieveResponse.data.allPosts)
        }
      } catch(err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    retrieveAllPosts()
  }, [])

  return (
    <>
      <NavigationBar />
      <Container>
        <Row className="pt-4">
          <Col className="col-2">
            <Sidebar />
          </Col>
          {isLoading ? (<Col className="col-7">Loading</Col>) :
          ( 
            <Col className="col-7">
              {allPosts.map((post) => (
                <div className="post-container d-flex p-3 gap-3 h-50 border" role="button" onClick={() => navigate(`/status/${post.id}`)} key={post.id}>
                  <Image src={post.author.profilePic} className="object-fit-cover mt-1" width='35px' height='35px' roundedCircle/>
                  <div className="post-content">
                    <div><b>{post.author.name}</b> <span className="text-muted">@{post.author.username}</span> · <span className="text-muted">{formatDistanceToNow(post.createdAt, {addSuffix: true})}</span></div>
                    <div>{post.content}</div>
                  </div>
                </div>
              ))}
            </Col>
          )}
          <Col className="col-3">
            Card Stuff
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home