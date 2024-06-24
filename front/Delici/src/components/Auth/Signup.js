import React, { useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [fullName, setFullName] = useState("");
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
      navigate("/login");
      // Add any further logic or redirection here after successful signup
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error(error.message);
      // Handle error scenarios such as displaying an error message to the user
    }
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
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
                  onChange={(e) => setFullName(e.target.value)}
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
                <MDBBtn
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  type="submit"
                >
                  Sign Up
                </MDBBtn>
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
              src="https://static.vecteezy.com/system/resources/previews/001/431/382/original/healthy-menu-and-fresh-food-e-commerce-composition-vector.jpg"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
