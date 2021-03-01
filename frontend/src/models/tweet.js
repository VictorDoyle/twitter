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

  static showTweet = (id) => {
    return axios
      .get(`${url}/${id}`, {
        headers: {
          "Content-Type": "application/json",
          // authorization: `Bearer ${localStorage.uid}`,
        },
      })
      .then((res) => res.data);
  };

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
