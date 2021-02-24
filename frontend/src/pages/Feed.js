import NavBar from "../components/NavBar/NavBar";
import Tweets from "../components/Tweets/Tweets";
import WhatsHappening from "../components/WhatsHappening/WhatsHappening";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Feed.css";

function Feed() {
  return (
    <div className="Feed" id="feed-page">
      <Container>
        <Row>
          <Col className="col">
            <NavBar />
          </Col>
          <Col className="col tweet-width" md={6}>
            <Tweets />
          </Col>
          <Col className="col">
            <WhatsHappening />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Feed;
