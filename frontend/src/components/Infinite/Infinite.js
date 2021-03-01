import React, { useEffect, useState, useRef } from "react";
import tweetModel from "../../models/tweet";
import Tweets from "../../components/Tweets/Tweets";

const Infinite = () => {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const [tweets, setTweets] = useState([]);
  let initialState = 0;
  let initialState2 = 5;
  const [currentIndexStart, setCurrentIndexStart] = useState(initialState);
  const [currentIndexEnd, setCurrentIndexEnd] = useState(initialState2);
  const loader = useRef(null);
  useEffect(
    function () {
      const fetchData = () => {
        tweetModel.all().then((data) => {
          console.log(data.tweets, "Fetch data");
          setTweets(data.tweets);
        });
        setPostList(currentTweets);
      };
      fetchData();
    },
    [page],
  );

  const currentTweets = tweets.slice(initialState, initialState2);

  /* setPostList(currentTweets); */

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  console.log(postList);

  // useEffect(() => {
  //   // here we simulate adding new posts to List
  //   // const newList = postList.concat(currentTweets);
  //   // if (currentTweets) {
  //   setPostList(currentTweets);
  //   setCurrentIndexStart(initialState + 5);
  //   setCurrentIndexEnd(initialState2 + 5);
  //   // }
  // }, [page]);

  // here we handle what happens when user scrolls to Load More div
  // in this case we just update page variable
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page);
    } else {
      console.log("Vickies Titties");
    }
  };

  console.log(tweets);

  return (
    <>
      <div className="container">
        <div className="loading" ref={loader}>
          {tweets ? (
            <>
              {postList.map((tweet) => {
                return (
                  <>
                    <Tweets {...tweet} key={tweet.id} />
                  </>
                );
              })}
            </>
          ) : null}
          <h2>Load More</h2>
        </div>
      </div>
    </>
  );
};

export default Infinite;
