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
    return fetch(`${url}/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
      },
    }).then((res) => res.json());
  };

  static create = (data) => {
    return axios
      .post(`${url}`, {
        // options
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.data);
  };

  static delete = (id) => {
    console.log("showing deleted tweet", id);
    return axios
      .delete(`${url}/delete/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.uid}`,
        },
      })
      .then((res) => res.json());
  };
}

export default tweetModel;
