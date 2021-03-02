import { userState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import NavBar from "../../components/NavBar/NavBar";
import Tweets from "../../components/Tweets/Tweets";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TweetEntry from "../../components/Tweet Entry/TweetEntry";
import TweetEntryBefore from "../../components/Tweet Entry/TweetEntryBefore";
import WhatsHappening from "../../components/WhatsHappening/WhatsHappening";
import WhoToFollow from "../../components/WhoToFollow/WhoToFollow";
import tweetModel from "../../models/tweet";
import StickyNav from "../../components/StickyNav/StickyNav";
import Infinite from "../../components/Infinite/Infinite";
import AuthModel from "../../models/auth";

import "./MainFeed.css";
import React, { useState, useEffect } from "react";

function MainFeed() {
  const [user, setUser] = useRecoilState(userState);
  const [description, setDescription] = useState("");
  const [input, setInput] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [isBottom, setIsBottom] = useState(false);
  const [tweetsToDisplay, setTweetsToDisplay] = useState(tweets.slice(0, 5));
  const [page, setPage] = useState(1);

  /*  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); */

  /*   useEffect(() => {
    if (isBottom) {
      addTweets();
    }
  }, [isBottom]);

  function handleScroll() {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsBottom(true);
    }
  } */

  //TODO refactor for authorID = user.id

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Mail Mother fucker");
    // currently pulling in more information so this is what is needed for id
    tweetModel.create({ description: description, authorId: user.user.id });
  };

  const handleState = () => {
    console.log("handlestate");
    setInput(true);
  };

  useEffect(
    function () {
      fetchData();
      if (!user) {
        // takes user from storage and sets global again
        setUser(JSON.parse(localStorage.getItem("userinfo")));

        //   AuthModel.verify().then((json) => {
        //     localStorage.setItem("uid", json.token);
        //     console.log(json.user, "login");
        //     setUser(json);
        //   });
        //   console.log(user);
      }
    },
    [user],
  );
  console.log(user.user.id);

  /*   const setInitial = () => {
    setTweetsToDisplay(tweets.slice(0, 5));

  }; */

  const fetchData = () => {
    tweetModel.all().then((data) => {
      setTweets(data.tweets);
    });
  };

  const addTweets = () => {
    if (tweets.length !== 0) {
      setTweetsToDisplay((prevState) => ({
        page: prevState.page + 1,
        tweetsToDisplay: prevState.tweetsToDisplay.concat(
          tweets.slice(
            (prevState.page + 1) * 30,
            (prevState.page + 1) * 30 + 30,
          ),
        ),
      }));
      setIsBottom(false);
    }
  };

  let allTweets = tweetsToDisplay.map((tweet, index) => {
    return (
      <>
        <Tweets {...tweet} key={tweet.id} />
      </>
    );
  });
  console.log(tweets);

  return (
    <div className="Feed" id="feed-page">
      <Container>
        <Row>
          <Col>
            <NavBar />
          </Col>
          <Col md={6}>
            <StickyNav />
            {input === false ? (
              <TweetEntryBefore handleState={handleState} />
            ) : (
              <TweetEntry
                submitHandler={submitHandler}
                description={(e) => setDescription(e.target.value)}
                descriptionValue={description}
              />
            )}
            {/* {tweets ? <Infinite /> : <h1>No Tweets</h1>} */}
            <Infinite />
          </Col>
          <Col>
            <WhatsHappening />
            <WhoToFollow />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainFeed;
