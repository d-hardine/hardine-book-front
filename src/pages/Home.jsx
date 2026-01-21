import axiosInstance from "../config/axiosInstance"
import UserContext from "../config/UserContext"
import { useContext, useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import NavigationBar from "../components/NavigationBar"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Sidebar from "../components/Sidebar"
import { formatDistanceToNow } from "date-fns"

function Home() {

  const { user, setUser } = useContext(UserContext)

  const [allPosts, setAllPosts] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const retrieveAllPosts = async () => {
      try {
        const retrieveResponse =  await axiosInstance('/api/all-posts')
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
                <Row className="pb-3" key={post.id}>
                  <div>@{post.author.username}</div>
                  <div className="text-muted">@{post.author.name}</div>
                  <div>{post.content}</div>
                  <div>{formatDistanceToNow(post.createdAt, {addSuffix: true})}</div>
                </Row>
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