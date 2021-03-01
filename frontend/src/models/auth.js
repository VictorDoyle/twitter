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

  static verify = (data) => {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
      },
    };
    return axios
      .get(`${url}/users/verify`, data, config)
      .then((response) => response.data);
  };
}

export default AuthModel;
