/* base */
import "./Feed.css";
import RecommendationLoader from "../Loaders/RecommendationLoader";
import TweetCard from "../TweetCard/TweetCard";

function FeedWithReplies(props) {
  // eslint-disable-next-line
  let tweetsWithReplies = props.tweets.map((tweet) => {
    if (tweet.comments.length > 0) {
      return (
        <>
          <TweetCard {...tweet} key={tweet.id} {...props.user} />
        </>
      );
    }
  });

  return <>{props.tweets ? tweetsWithReplies : <RecommendationLoader />}</>;
}

export default FeedWithReplies;
