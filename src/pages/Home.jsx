import axiosInstance from "../config/axiosInstance"
import { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import NavigationBar from "../components/NavigationBar"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Sidebar from "../components/Sidebar"
import StatusCard from "../components/StatusCard"
import LatestUsersCard from "../components/LatestUsersCard"
import { BounceLoader } from "react-spinners"
import BottomNavigationBar from "../components/BottomNavigationBar"

function Home() {

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
          <Col className="d-none d-sm-block col-2">
            <Sidebar />
          </Col>
          {isLoading ? (<BounceLoader />) :
          (
            <Col>
              {allPosts.map((post) => (
                <StatusCard post={post} key={post.id} />
              ))}
            </Col>
          )}
          <Col className="d-none d-lg-block col-lg-4 col-xxl-3">
            <LatestUsersCard />
          </Col>
        </Row>
      </Container>
      <BottomNavigationBar />
    </>
  )
}

export default Home