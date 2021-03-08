import axios from "axios";

const url = `http://localhost:4000/api/likes`;

class likeModel {
  // access all likes
  static all = () => {
    return axios
      .get(`${url}`, {
        headers: {
          authorization: `Bearer ${localStorage.uid}`,
        },
      })
      .then((res) => res.data);
  };
/* show likes */
/*   static showLike = (id) => {
    return axios
    .get(`${url}/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
      },
    })
    .then((res) => res.data);
  }; */

   // access all posts by by specifc user
  static showByAuthor = (authorId) => {
    return axios
    .get(`${url}/${authorId}`, {
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
  })
  .then(res => res.data)
  };

  /* create like */
  static create = (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios.post(url, data, config);
  };

  static delete = (id) => {
    console.log("showing deleted like", id);
    return axios
      .delete(`${url}/delete/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.uid}`,
        },
      })
      .then((res) => res.data);
  };
}

export default likeModel;
