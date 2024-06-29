import React, { useState } from "react";
import {
 
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import Button from 'react-bootstrap/Button';

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
 

  const navigate = useNavigate();
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resultAction = await dispatch(login({ email, password }));
      if (login.fulfilled.match(resultAction)) {
        toast.success("Login successful");
        navigate("/");
      } else {
        throw resultAction.payload;
      }
    } catch (error) {
      console.error("Login failed", error);
      const errorMessage = error?.message || error || "Login failed";
      toast.error(errorMessage);
    }
  };
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://www.nhlbi.nih.gov/sites/default/files/styles/16x9_crop/public/2020-07/Heart%20healthy%20foods%20-%20shutterstock_624180923.jpg?h=4677f108&itok=JcbD1R5M"
              alt="login form"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button style={{backgroundColor: "black",borderColor: "black"}}
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  type="submit"
                >
                  Login
                </Button>
              </form>
              
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a href="/sign-up" style={{ color: "#393f81" }}>
                  Register here
                </a>
              </p>
              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
