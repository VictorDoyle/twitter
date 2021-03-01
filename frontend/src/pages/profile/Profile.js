/* user state import */
import { userState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
/* bootstrap component imports */
import { Col, Container, Row} from "react-bootstrap";
/* components */

import NavBar from "../../components/NavBar/NavBar";
/* base */
import React, { useState } from "react";
import "./Profile.css";
import Recommendations from "../../components/Profile/RecommendFriends/Recommendations";
import ProfileMedia from "../../components/Profile/ProfileMedia/ProfileMedia";
import Happening from "../../components/Profile/Happening/Happening";
import Header from "../../components/Profile/Header/Header";
import Feed from "../../components/Profile/Feed/Feed";
import FeedNav from "../../components/Profile/FeedNav/FeedNav";

function Profile() {

  const user = useRecoilState(userState);
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
          <FeedNav />
          {/* profile feed */}
          <Feed />



          
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
