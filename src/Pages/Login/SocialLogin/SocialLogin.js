import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const SocialLogin = () => {
  const location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();

  let errorElement;

  if (loading || loadingGithub || loadingFacebook) {
    return <Loading></Loading>;
  }

  if (error || errorGithub || errorFacebook) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {errorGithub?.message} {errorFacebook?.message}
      </p>
    );
  }

  let from = location.state?.from?.pathname || "/";

  if (user || userGithub || userFacebook) {
    navigate(from, { replace: true });
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs="12" lg="5" className="mx-auto rounded-bottom pb-5">
          <div className="d-flex align-items-center">
            <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            <p className="mt-2 px-2">or</p>
            <div style={{ height: "1px" }} className="bg-primary w-50"></div>
          </div>
          {errorElement}
          <div>
            <Button
              variant="outline-primary"
              onClick={() => signInWithGoogle()}
              className="w-75 d-block mx-auto my-2"
            >
              <FontAwesomeIcon icon={faGoogle} />
              <span className="px-2">Google Sign In</span>
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => signInWithGithub()}
              className="w-75 d-block mx-auto my-2"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="px-2">Github Sign In</span>
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => signInWithFacebook()}
              className="w-75 d-block mx-auto my-2"
            >
              <FontAwesomeIcon icon={faFacebook} />
              <span className="px-2">facebook Sign In</span>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialLogin;
