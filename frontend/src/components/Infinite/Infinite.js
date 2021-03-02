import React, { useEffect, useState, useRef } from "react";
import tweetModel from "../../models/tweet";
import Tweets from "../../components/Tweets/Tweets";
import InfiniteScroll from "react-infinite-scroll-component";

const Infinite = () => {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const [tweets, setTweets] = useState([]);
  let initialState = 0;
  let initialState2 = 5;
  const [currentIndexStart, setCurrentIndexStart] = useState(initialState);
  const [currentIndexEnd, setCurrentIndexEnd] = useState(initialState2);
  const loader = useRef(null);
  // const currentTweets = tweets.slice(initialState, initialState2);

  useEffect(function () {
    const fetchData = () => {
      tweetModel.all().then((data) => {
        console.log(data.tweets, "Fetch data");
        setTweets({ tweets: data.tweets, hasMore: true });
        setPage({ tweets: data.tweets1, hasMore: true });
      });
      // setPostList(currentTweets);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const handleObserver = (entities) => {
  //     const target = entities[0];
  //     setPostList(currentTweets);
  //     if (target.isIntersecting) {
  //       setPage((page) => page);
  //     } else {
  //       console.log("Vickies Titties");
  //     }
  //   };

  //   // use efeect2
  //   var options = {
  //     root: null,
  //     rootMargin: "20px",
  //     threshold: 1.0,
  //   };
  //   // initialize IntersectionObserver
  //   // and attaching to Load More div
  //   const observer = new IntersectionObserver(handleObserver, options);
  //   if (loader.current) {
  //     observer.observe(loader.current);
  //   }
  // }, []);

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
  // const handleObserver = (entities) => {
  //   const target = entities[0];
  //   if (target.isIntersecting) {
  //     setPage((page) => page);
  //   } else {
  //     console.log("Vickies Titties");
  //   }
  // };
  const Mapper = () => (
    <>
      {tweets.tweets.map((tweet, i) => (
        <Tweets {...tweet} key={i + 1} />
      ))}
    </>
  );

  const fetchMoreData = () => {
    // if (tweets.tweets.length >= 10) {
    //   setTweets({ hasMore: false });
    //   return;
    // }
    setTimeout(() => {
      setTweets({
        // not working
        // tweets: page.tweets.concat(Array.from({ length: 10 })),
        tweets: tweets.tweets.concat(Array.from({ length: 10 })),
      });
    }, 500);
  };
  console.log(tweets, "tweets");
  console.log(page, "page");

  return (
    <>
      <div className="container">
        <div className="loading" ref={loader}>
          {tweets.tweets ? (
            <InfiniteScroll
              dataLength={tweets.tweets.length}
              next={fetchMoreData}
              hasMore={tweets.hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {console.log(tweets.tweets)}
              <Mapper />
            </InfiniteScroll>
          ) : (
            <></>
          )}

          {/* {tweets ? (
            <>
              {postList.map((tweet) => {
                return (
                  <>
                    <Tweets {...tweet} key={tweet.id} />
                  </>
                );
              })}
            </>
          ) : null} */}
          <h2>Load More</h2>
        </div>
      </div>
    </>
  );
};

export default Infinite;
