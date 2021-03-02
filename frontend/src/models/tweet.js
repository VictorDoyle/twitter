import axios from "axios";

const url = `http://localhost:4000/api/tweets`;

class tweetModel {
  // access all tweets
  static all = () => {
    return axios
      .get(`${url}`, {
        headers: {
          authorization: `Bearer ${localStorage.uid}`,
        },
      })
      .then((res) => res.data);
  };
/* show tweet */
  static showTweet = (id) => {
    return axios
    .get(`${url}/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
      },
    })
    .then((res) => res.data);
  };

   // access all posts by by specifc user
  static showByUser = (authorId) => {
    return axios
    .get(`${url}/profile/${authorId}`, {
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
  })
  .then(res => res.data)
  };

  /* create tweet */
  static create = (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios.post(url, data, config);
  };

  static delete = (id) => {
    console.log("showing deleted tweet", id);
    return axios
      .delete(`${url}/delete/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.uid}`,
        },
      })
      .then((res) => res.data);
  };
}

export default tweetModel;
