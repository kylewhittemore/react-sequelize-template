import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css";
import { Container, Row, Button, Col } from "react-bootstrap";
import Axios from "axios";

function Home(props) {
  const { isAuth } = useContext(AuthContext);
  console.log("home auth: ", isAuth);

  const [secret, setSecret] = useState("");

  // this function is duplicated in the Members page component
  const getSecret = async () => {
    const secretResponse = await Axios.get("/api/secrets");
    console.log(secretResponse.data);
    setSecret(secretResponse.data);
  };

  return (
    <Container className="signup">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Home Page</h1>
          {isAuth ? (
            <>
              <Button
                className="m-1"
                onClick={e => {
                  e.preventDefault();
                  setSecret('');
                  props.logout();
                }}
              >
                Logout
              </Button>
              <Button
                className="m-1"
                onClick={e => {
                  e.preventDefault();
                  props.history.push("/members");
                }}
              >
                Members
              </Button>
            </>
          ) : (
            <>
              <Button
                className="m-1"
                onClick={e => {
                  e.preventDefault();
                  props.history.push("/login");
                }}
              >
                Login
              </Button>
              <Button
                className="m-1"
                onClick={e => {
                  e.preventDefault();
                  props.history.push("/signup");
                }}
              >
                Signup
              </Button>
            </>
          )}
          <Button
            className="m-1"
            onClick={e => {
              e.preventDefault();
              getSecret();
            }}
          >
            Show Secrets
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>{secret}</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
