import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHome, faSearch, faListUl,faAt, faHashtag, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faBell, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar () {
    

    return(
        <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link eventKey="link-1"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
        <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faHashtag} /></Nav.Link>
        <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faHome} /></Nav.Link>
        <Nav.Link eventKey="link-3"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
        <Nav.Link eventKey="link-4"><FontAwesomeIcon icon={faBell} /></Nav.Link>
        <Nav.Link eventKey="link-5"><FontAwesomeIcon icon={faEnvelope} /></Nav.Link>
        <Nav.Link eventKey="link-6"><FontAwesomeIcon icon={faBookmark} /></Nav.Link>
        <Nav.Link eventKey="link-7"><FontAwesomeIcon icon={faListUl} /></Nav.Link>
        <Nav.Link eventKey="link-8"><FontAwesomeIcon icon={faAt} /></Nav.Link>
        <Nav.Link eventKey="link-9"><FontAwesomeIcon icon={faUser} /></Nav.Link>
      </Nav>
    ) 
}

export default NavBar