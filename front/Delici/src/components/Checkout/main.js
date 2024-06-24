import React, { useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function CartCheckout() {
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [checkoutClicked, setCheckoutClicked] = React.useState(false);
  const me = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();
 
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();
  console.log(items, "item");
  const navigate = useNavigate();

  const apply = async (event) => {
    console.log("handleSubmit called");
   
    try {
      const response = await axios.post("http://localhost:7000/orders", {
        price: cartTotal + 7, 
        productIds: items.map((item) => item.id),
        userId: me.id, 
        address,
        phoneNumber
      });
      console.log("Order created successfully:", response.data); // Log the response from the server
      navigate("/success"); // Redirect to a success page or handle accordingly
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff", color: "black" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-dark">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">{items.length} items</h6>
                      </div>

                      {isEmpty && <p>Your cart is empty</p>}
                      {items.map((elem) => (
                        <React.Fragment key={elem.id}>
                          <hr className="my-4" />
                          <div className="row mb-4 d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={elem.imageURL}
                                className="img-fluid rounded-3" alt={elem.productName} />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted text-dark">{elem.productName}</h6>
                              <h6 className="mb-0 text-dark">{elem.description}</h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link px-2"
                                onClick={() => updateItemQuantity(elem.id, elem.quantity - 1)}>
                                <i className="fas fa-minus"></i>
                              </button>

                              <input id="form1" name="quantity" value={elem.quantity} type="number"
                                className="form-control form-control-sm text-dark" style={{ width: "50px" }} readOnly />

                              <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link px-2"
                                onClick={() => updateItemQuantity(elem.id, elem.quantity + 1)}>
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0 text-dark"> {elem.price} dt</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <i className="fas fa-times" onClick={() => removeItem(elem.id)}></i>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <h6 className="mb-0"><a href="#!" onClick={() => navigate(-1)} className="text-body"><i
                          className="fas fa-long-arrow-alt-left me-2 text-dark"></i>Back to shop</a></h6>
                      </div>
                    </div>
                  </div>
                 { !checkoutClicked && 
                  <div className="col-lg-4 bg-body-tertiary">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1 text-dark">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase text-dark">items {items.length}</h5>
                        <h5 className="text-dark">{cartTotal} dt</h5>
                      </div>
                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase mb-3 text-dark">Shipping</h5>
                        <h5 className="text-dark">7 dt</h5>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase text-dark">Total price</h5>
                        <h5 className="text-dark">{cartTotal + 7} dt</h5>
                      </div>

                      <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark" onClick={() => setCheckoutClicked(true)}>Checkout</button>
                    </div>
                  </div>}
                  {checkoutClicked && 
                  <MDBCardBody className="d-flex flex-column">
                    <div>
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Phone Number"
                        // id="formControlLg"
                        type="text"
                        size="lg"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Address"
                        // id="formControlLg"
                        size="lg"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <button
                        className="mb-4 px-5"
                        color="dark"
                        size="lg"
                        onClick={apply}
                      >
                        Apply Order
                      </button>
                    </div>
                  </MDBCardBody>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
