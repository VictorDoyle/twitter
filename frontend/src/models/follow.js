import axios from "axios";

const url = `http://localhost:4000/api/follows`;

class FollowModel {
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

  // access all posts by by specifc user
  static showByUser = (userId) => {
    return axios
      .get(`${url}/${userId}`, {
        headers: {
          authorization: `Bearer ${localStorage.uid}`,
        },
      })
      .then((res) => res.data);
  };

  /* create follow */
  static create = (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios.post(url, data, config);
  };

  static delete = (id) => {
    console.log("showing deleted follow", id);
    return axios
      .delete(`${url}/delete/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.uid}`,
        },
      })
      .then((res) => res.json());
  };
}

export default FollowModel;
