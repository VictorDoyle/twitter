/* user state import */
import { userState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
/* bootstrap component imports */
import { Col, Container, Row } from "react-bootstrap";
/* base */
import React, { useState, useEffect } from "react";
import "./Profile.css";
/* components */
import NavBar from "../../components/NavBar/NavBar";
import Recommendations from "../../components/Profile/RecommendFriends/Recommendations";
import ProfileMedia from "../../components/Profile/ProfileMedia/ProfileMedia";
import Happening from "../../components/Profile/Happening/Happening";
import Header from "../../components/Profile/Header/Header";
// import Feed from "../../components/Profile/Feed/Feed";
import FeedNav from "../../components/Profile/FeedNav/FeedNav";
/* models */
import tweetModel from "../../models/tweet";

function Profile() {
  const [user, setUser] = useRecoilState(userState);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem("userinfo")));
    } else {
      console.log(user.id);
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  /* base */

  /* get tweets by user id */
  const fetchData = () => {
    tweetModel.showByUser(user.id).then((data) => {
      console.log("these are tweets fetched by data", data);
      setTweets(data.tweetsByAuthor);
    });
  };

  return (
    <div className="Feed" id="feed-page">
      <Container>
        <Row>
          <Col>
            <NavBar />
          </Col>
          <Col md={6}>
            {/* profile header*/}
            <Header />

            {/* profile subheader nav */}
            <FeedNav tweets={tweets} />
            {/* profile feed */}
            {/*  <Feed tweets = {tweets} user= { user }/>
             */}
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
