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
    console.log(data);
    return fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
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
