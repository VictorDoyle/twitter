const url = `http://localhost:4000/api/users`

class UserModel {
  // access all users
  static all = () => {
    return fetch(`${url}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
    }).then(res => res.json())
  }

  // accessed current user via Id+login
 /*  static show = (id) => {
    return fetch(`${API}/verify`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.uid}`
        }

    }).then(res => res.json())
  } */


  // show specific user
  static showUser = (id) => {
    return fetch(`${url}/${id}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.uid}`
        }

    }).then(res => res.json())
  }

  // create a user
  static create = (data) => {
    return fetch(`${url}`, {
      // options
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  } 

  // update-Edit user

static update = (data) => {
  return fetch(`${url}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.uid}`
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
} 


  // delete route for user
  static delete = (id) => {
    console.log("showing deleted user", id)
    return fetch(`${url}/delete/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
    }).then(res => res.json())
  }
}

export default UserModel
