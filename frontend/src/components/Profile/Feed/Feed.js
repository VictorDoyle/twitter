import react, {useEffect, useState} from 'react'
import { Nav, Row, FormControl, Button, Form } from 'react-bootstrap'

function Feed  () {


    return (
        <>
 

    <Nav className="mr-auto" fill justify>
      <Nav.Link href="#profile">Tweets</Nav.Link>
      <Nav.Link href="#with_replies">Tweets &amp; Replies </Nav.Link>
      <Nav.Link href="#media">Media</Nav.Link>
      <Nav.Link href="#likes">Likes</Nav.Link>
      <Row></Row>
    </Nav>
    
</>
    )
}

export default Feed