import NavBar from '../components/NavBar/NavBar'
import Tweets from '../components/Tweets/Tweets'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Feed() {
  return (
    <div className="Feed">
        <Container>
        <Row>
        <Col><NavBar /></Col>
        <Col md={6}><Tweets /></Col>
        <Col><section>WHATS HAPPENING</section></Col>
        </Row>
        </Container>
        
    </div>
  );
}

export default Feed;