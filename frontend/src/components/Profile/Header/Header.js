/* base */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userState } from "../../../recoil/atoms";
import { useSetRecoilState } from "recoil";
import "./Header.css";
/* bootstrap component imports */
import { Col, Modal, Row, Button, Image, Form } from "react-bootstrap";
// import UserModel from "../../../models/user";
import { useMutation, gql } from "@apollo/client";
import Loader from "../Loaders/RecommendationLoader";

const updateUserMutation = gql`
  mutation Mutation(
    $updateUserBio: String
    $updateUserEmail: String
    $updateUserFirstname: String
    $updateUserUsername: String
  ) {
    updateUser(
      bio: $updateUserBio
      email: $updateUserEmail
      firstname: $updateUserFirstname
      username: $updateUserUsername
    ) {
      id
      email
      firstname
      lastname
      username
      bio
      dateOfBirth
      password
      token
    }
  }
`;

function Header({ user }) {
  const [update, { loading, error, data }] = useMutation(updateUserMutation);
  const setUser = useSetRecoilState(userState);

  /* modal settings */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /* edit profile functions */
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  // const { id } = user;

  async function handleProfileEdit(event) {
    event.preventDefault();
    await update({
      variables: {
        updateUserUsername: username,
        updateUserFirstname: firstname,
        updateUserEmail: email,
        updateUserBio: bio,
      },
    });
    handleClose();

    // UserModel.update({ id, username, bio, firstname, email }).then((json) => {
    //   if (json.status === 201) {
    //     console.log(json, "updated");
    //   } else {
    //     console.log(json, "error with update");
    //   }
    // });
  }
  if (!loading && data) {
    const { updateUser } = data;
    localStorage.setItem("userinfo", JSON.stringify(updateUser));
    setUser(updateUser);
  }
  if (loading) return <Loader />;
  if (error) return <p>An error occurred</p>;

  return (
    <>
      <Row className="profileHero">
        {/* header image behind profile photo */}
        <Image
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22866%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20866%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_177df71d25f%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A43pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_177df71d25f%22%3E%3Crect%20width%3D%22866%22%20height%3D%22250%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22317.6796875%22%20y%3D%22145.25%22%3E866x250%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          fluid
        />

        <Col xs={6} md={4} className="profilePhoto">
          <Image
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_177df71d25d%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_177df71d25d%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2261.2109375%22%20y%3D%2294.8%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            roundedCircle
          />
        </Col>
      </Row>

      <Row>
        <Button
          className="editProfileButton editProfileLink"
          onClick={handleShow}
        >
          Edit Profile
        </Button>

        {user.id ? (
          <>
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header>
                <Button className="closeSettingsModal" onClick={handleClose}>
                  X
                </Button>
                <Modal.Title> Edit Profile </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleProfileEdit}>
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="username"
                      placeholder={user.username}
                      default={user.username}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                      type="bio"
                      placeholder={user.bio}
                      default={user.bio}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="firstname"
                      placeholder={user.firstname}
                      default={user.firstname}
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder={user.email}
                      default={user.email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button className="submitButtonForm" type="submit">
                    Save
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </>
        ) : (
          <h1> no user to edit </h1>
        )}
      </Row>

      <Row>
        <div className="bioContent">
          <h5> Username Here</h5>
          <p className="mb-2 text-muted">@twitterHandle</p>

          <p>{user.bio}</p>

          <p className="mb-2 text-muted">
            <Link to={"/following"} className="followLinks text-muted">
              <b> 219 </b> Following
            </Link>
            <Link to={"/followers"} className="followLinks text-muted">
              <b> 59 </b>Followers
            </Link>
          </p>
        </div>
      </Row>
    </>
  );
}

export default Header;
