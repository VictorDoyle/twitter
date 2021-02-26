
/* bootstrap component imports */
import { Col, Container, Row, Card} from "react-bootstrap";
/* font awesome imports */
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faRetweet,
  faHeart,
  faUserCircle,
  faComment,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* components */
import WhatsHappening from "../../components/WhatsHappening/WhatsHappening";
import WhoToFollow from "../../components/WhoToFollow/WhoToFollow";
import NavBar from "../../components/NavBar/NavBar";
import Tweets from "../../components/Tweets/Tweets";
/* base */
import "./Profile.css";
import React, { useState } from "react";
import Recommendations from "../../components/Profile/RecommendFriends/Recommendations";
import ProfileMedia from "../../components/Profile/ProfileMedia/ProfileMedia";
import Happening from "../../components/Profile/Happening/Happening";
import Header from "../../components/Profile/Header/Header";

function Profile() {
  return (
    <div className="Feed" id="feed-page">
      <Container>
        <Row>
          <Col>
            <NavBar />
          </Col>
          <Col md={6}>
        
          {/* profile header*/}
          <Header/>

          {/* profile subheader nav */}

          {/* profile feed */}



          
          </Col>
          <Col>
          {/* SECTION: media box */}
            <ProfileMedia />
          {/* Recommended Follows */}
            <Recommendations />
            {/* What's Happening Section */}
            <Happening />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
