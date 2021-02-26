import react, {useEffect, useState} from 'react'
import { Nav, Row, FormControl, Button, Form } from 'react-bootstrap'

import './FeedNav.css'

function FeedNav  () {


    return (
        <>
 

    <Nav variant="tabs" className="mr-auto profileNavBar" fill justify defaultActiveKey="link-1">
      <Nav.Link eventKey="link-1"href="#profile">Tweets</Nav.Link>
      <Nav.Link eventKey="link-2" href="#with_replies">Tweets &amp; Replies </Nav.Link>
      <Nav.Link eventKey="link-3" href="#media">Media</Nav.Link>
      <Nav.Link eventKey="link-4" href="#likes">Likes</Nav.Link>
    </Nav>
    
</>
    )
}

export default FeedNav