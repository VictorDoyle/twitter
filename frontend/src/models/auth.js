import axios from "axios";
const url = `http://localhost:4000/api`;

class AuthModel {
  static register = (data) => {
    console.log(data);
    return axios(`${url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  static login = (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios.post(`${url}/login`, data, config).then((res) => res.data);
  };

  static verify = () => {
    return fetch(`${url}/users/verify`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
      },
    }).then((response) => response.json());
  };
}

export default AuthModel;
