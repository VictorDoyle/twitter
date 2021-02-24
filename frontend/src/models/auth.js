const url = `http://localhost:4000/api/v1`


class AuthModel {
    static register = (data) => {
      console.log(data)
        return fetch(`${API}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json());
        
    };
    

    static login = (data) => {
        return fetch(`${API}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then(response => response.json());
      };

    static verify = () => {
        return fetch(`${API}/users/verify`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.uid}`,
          },
        }).then(response => response.json());
      };
    }



export default AuthModel;
