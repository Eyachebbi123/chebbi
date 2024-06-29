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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    emptyCart,
  } = useCart();

  const navigate = useNavigate();

  const apply = async () => {
    console.log("handleSubmit called");

    try {
      const response = await axios.post("http://localhost:7000/orders", {
        price: cartTotal + 7,
        items: items.map((item) => ({ id: item.id, quantity: item.quantity })),
        userId: me.id,
        phone: +phoneNumber,
        address: address,
      });
      console.log("Order created successfully:", response.data);
      toast.success("Order created successfully");
      emptyCart(); 
      setPhoneNumber("");
      setAddress("");
      setCheckoutClicked(false);

    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Error creating order");
    }
  };
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff", color: "black" }}>
    <MDBContainer className="py-5 h-100">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol md="10">
          <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
            <MDBCardBody className="p-0">
              <MDBRow className="g-0">
                <MDBCol lg="8">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h1 className="fw-bold mb-0 text-dark">Shopping Cart</h1>
                      <h6 className="mb-0 text-muted">{items.length} items</h6>
                    </div>

                    {isEmpty && <p>Your cart is empty</p>}
                    {items?.map((elem) => (
                      <React.Fragment key={elem.id}>
                        <hr className="my-4" />
                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage src={elem.imageURL} className="img-fluid rounded-3" alt={elem.productName} />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <h6 className="text-muted text-dark">{elem.productName}</h6>
                            <h6 className="mb-0 text-dark">{elem.description.slice(0, 70)}</h6>
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="2" className="d-flex">
                            <MDBBtn color="link" className="px-2" onClick={() => updateItemQuantity(elem.id, elem.quantity - 1)}>
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>

                            <MDBInput
                              wrapperClass="form-outline form-white"
                              id="form1"
                              name="quantity"
                              value={elem.quantity}
                              type="number"
                              className="form-control form-control-sm text-dark"
                              style={{ width: "50px" }}
                              readOnly
                            />

                            <MDBBtn color="link" className="px-2" onClick={() => updateItemQuantity(elem.id, elem.quantity + 1)}>
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                            <h6 className="mb-0 text-dark">{elem.price} dt</h6>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <MDBIcon fas icon="times" onClick={() => removeItem(elem.id)} />
                          </MDBCol>
                        </MDBRow>
                      </React.Fragment>
                    ))}

                    <hr className="my-4" />

                    <div className="pt-5">
                      <h6 className="mb-0">
                        <a href="#!" onClick={() => navigate("/")} className="text-body">
                          <MDBIcon fas icon="long-arrow-alt-left me-2 text-dark" />
                          Back to shop
                        </a>
                      </h6>
                    </div>
                  </div>
                </MDBCol>
      <ToastContainer />

                {!checkoutClicked && (
                  <MDBCol lg="4" className="bg-body-tertiary">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1 text-dark">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase text-dark">items {items.length}</h5>
                        <h5 className="text-dark">{cartTotal.toFixed(2)} dt</h5>
                      </div>
                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase mb-3 text-dark">Shipping</h5>
                        <h5 className="text-dark">7 dt</h5>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase text-dark">Total price</h5>
                        <h5 className="text-dark">{(cartTotal + 7).toFixed(2)} dt</h5>
                      </div>

                      <MDBBtn color="dark" block size="lg" onClick={() => setCheckoutClicked(true)}>
                        Checkout
                      </MDBBtn>
                    </div>
                  </MDBCol>
                )}
                {checkoutClicked && (
                  <MDBCardBody className="d-flex flex-column col-3" style={{ marginTop: "100px" }}>
                    <div>
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Phone Number"
                        type="text"
                        size="lg"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Address"
                        size="lg"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <MDBBtn color="dark" block size="lg" onClick={apply}>
                        Apply Order
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                )}
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
  );
}
