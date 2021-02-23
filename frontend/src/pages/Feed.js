import NavBar from '../components/NavBar/NavBar'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./Feed.css";


function Feed() {
  return (
    <div className="Feed" id="feed-page">
        <Container>
        <Row>
        <Col><NavBar /></Col>
        <Col><section>2</section></Col>
        <Col><section>3</section></Col>
        </Row>
        </Container>
        
    </div>
  );
}

export default Feed;