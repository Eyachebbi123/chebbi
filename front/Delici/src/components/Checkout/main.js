import React from "react";
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

export default function CartCheckout() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();
  console.log(items, "item");
  return (
    <section class="h-100 h-custom" style={{ backgroundColor: "#d2c9ff", color: "black" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12">
            <div class="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <div class="card-body p-0">
                <div class="row g-0">
                  <div class="col-lg-8">
                    <div class="p-5">
                      <div class="d-flex justify-content-between align-items-center mb-5">
                        <h1 class="fw-bold mb-0 text-dark">Shopping Cart</h1>
                        <h6 class="mb-0 text-muted">{items.length} items</h6>
                      </div>

                      {isEmpty && <p>Your cart is empty</p>}
                      {items.map((elem) => (
                        <>
                          <hr class="my-4" />
                          <div class="row mb-4 d-flex justify-content-between align-items-center">
                            <div class="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={elem.imageURL}
                                class="img-fluid rounded-3" alt="Cotton T-shirt" />
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-3">
                              <h6 class="text-muted text-dark">{elem.productName
                              }</h6>
                              <h6 class="mb-0 text-dark">{elem.description}</h6>
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()" onClick={() => updateItemQuantity(elem.id, elem.quantity - 1)}>
                                <i class="fas fa-minus"></i>
                              </button>

                              <input id="form1" name="quantity" value={elem.quantity} type="number"
                                class="form-control form-control-sm text-dark" style={{ width: "50px" }} />

                              <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()" onClick={() => updateItemQuantity(elem.id, elem.quantity + 1)}>
                                <i class="fas fa-plus"></i>
                              </button>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 class="mb-0 text-dark "> {elem.price} dt</h6>
                            </div>
                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                              <i class="fas fa-times" onClick={() => removeItem(elem.id)}></i>
                            </div>
                          </div>
                        </>

                      ))}


                      <hr class="my-4" />

                      <div class="pt-5">
                        <h6 class="mb-0"><a href="#!" class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2 text-dark"></i>Back to shop</a></h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 bg-body-tertiary">
                    <div class="p-5">
                      <h3 class="fw-bold mb-5 mt-2 pt-1 text-dark">Summary</h3>
                      <hr class="my-4" />

                      <div class="d-flex justify-content-between mb-4">
                        <h5 class="text-uppercase text-dark">items {items.length}</h5>
                        <h5 className="text-dark">{cartTotal} dt</h5>
                      </div>
                      <div class="d-flex justify-content-between mb-4">

                        <h5 class="text-uppercase mb-3 text-dark">Shipping</h5>
                        <h5 className="text-dark">7 dt</h5>

                      </div>



                      <hr class="my-4" />

                      <div class="d-flex justify-content-between mb-5">
                        <h5 class="text-uppercase text-dark">Total price</h5>
                        <h5 className="text-dark">{cartTotal + 7} dt</h5>
                      </div>

                      <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark">Register</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}