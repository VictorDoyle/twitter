import React from "react";
import Tweets from "../../components/Tweets/Tweets";
import InfiniteScroll from "react-infinite-scroll-component";

const Infinite = ({ tweets, onLoadMore }) => {
  console.log(tweets);

  const Mapper = () => (
    <>
      {tweets.map((tweet, i) => (
        <Tweets {...tweet} key={i + 1} />
      ))}
    </>
  );

  return (
    <>
      <div className="container" style={{ padding: 0 }}>
        <div className="loading">
          {tweets ? (
            <InfiniteScroll
              dataLength={tweets.length}
              hasMore={true}
              next={onLoadMore}
              className="scroll"
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              <Mapper />
            </InfiniteScroll>
          ) : (
            <></>
          )}
          <h2>Load More</h2>
        </div>
      </div>
    </>
  );
};

export default Infinite;
