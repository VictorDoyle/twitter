/* import React, { useEffect } from "react";
import { userState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import { Container } from "react-bootstrap";

const SettingsPage = () => {
  const [user, setUser] = useRecoilState(userState);
  // this page will need auth to pervent errors
  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem("userinfo")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <Container>
      <p>this is the settings page</p>
    </Container>
  );
};

export default SettingsPage;
 */