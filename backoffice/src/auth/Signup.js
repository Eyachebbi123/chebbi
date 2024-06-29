import React, { useState } from "react";
import {

  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Button } from "react-bootstrap";

function Signup() {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:7000/users", {
        fullName,
        email,
        password,
      });

      console.log("Signup successful:", response.data);
      toast.success(response.data);
      navigate("/");
      
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error(error.message);
    
    }
  };
  return (
    <MDBContainer fluid style={{height:"70vh"}}>
      <MDBCard className="text-black " style={{ borderRadius: "25px" }}>
        <MDBCardBody>
        <MDBRow className="g-0">

        <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px", color: "#0d1819" }}
              >
                Register Now
              </h5>
              <form style={{ color: "#0d1819" }} onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Full Name"
                  id="fullName"
                  type="text"
                  size="lg"
                  value={fullName}
                  onChange={(e) => setfullName(e.target.value)}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="email"
                  type="email"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="password"
                  type="password"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                style={{backgroundColor: "black",borderColor: "black"}}
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  type="submit"
                >
                  Sign Up
                </Button>
              </form>
              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of Use
                </a>
                <a href="#!" className="small text-muted">
                  Privacy Policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6">
            <MDBCardImage
              src="https://www.nhlbi.nih.gov/sites/default/files/styles/16x9_crop/public/2020-07/Heart%20healthy%20foods%20-%20shutterstock_624180923.jpg?h=4677f108&itok=JcbD1R5M"
              alt="login form"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
