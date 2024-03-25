import React from "react";
import { Link } from "react-router-dom";
import bg19 from "../../../assets/images/background/bg-19.png";
import bg20 from "../../../assets/images/background/bg-20.png";
import menuimg5 from "../../../assets/images/resource/menu-image-5.png";
import menuimg6 from "../../../assets/images/resource/menu-image-6.png";
import menuimg7 from "../../../assets/images/resource/menu-image-7.png";
import menuimg8 from "../../../assets/images/resource/menu-image-8.png";
import menuimg9 from "../../../assets/images/resource/menu-image-9.png";
import menuimg10 from "../../../assets/images/resource/menu-image-10.png";

function Appetizers() {
  return (
    <>
      <section className="menu-two">
        <div className="right-bg">
          <img src={bg19} alt="" title="" />
        </div>
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">
              <span>STARTER MENU</span>
            </div>
            <div className="pattern-image">
              <img src={require("../../../assets/images/icons/separator.svg").default} alt="mySvgImage" />
            </div>
            <h2>Appetizers</h2>
          </div>
          <div className="row clearfix">
            <div className="menu-col col-lg-6 col-md-12 col-sm-12">
              <div className="inner">
                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg5} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">Greek Salad</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>$25.50</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Tomatoes, green bell pepper, sliced cucumber onion, olives,
                        and feta cheese.
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg6} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">
                            Lasagne <span className="s-info">SEASONAL</span>
                          </Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>$40.00</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Vegetables, cheeses, ground meats, tomato sauce, seasonings
                        and spices
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg7} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">Butternut Pumpkin</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>$10.00</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Typesetting industry lorem Lorem Ipsum is simply dummy text of
                        the priand.
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-col col-lg-6 col-md-12 col-sm-12">
              <div className="inner">

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg8} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">
                            Tokusen Wagyu <span className="s-info">NEW</span>
                          </Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>$39.00</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Vegetables, cheeses, ground meats, tomato sauce, seasonings
                        and spices.
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg9} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">Olivas Rellenas</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>$25.00</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Avocados with crab meat, red onion, crab salad stuffed red
                        bell pepper and green bell pepper.
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg10} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">Opu Fish</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>$49.00</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Vegetables, cheeses, ground meats, tomato sauce, seasonings
                        and spices
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-two">
        <div className="left-bg">
          <img src={bg20} alt="" title="" />
        </div>
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">
              <span>fresh &amp; hygine</span>
            </div>
            <div className="pattern-image">
              <img src={require("../../../assets/images/icons/separator.svg").default} alt="" title="" />
            </div>
            <h2>Main Dishes</h2>
          </div>
          <div className="row clearfix">
            <div className="menu-col col-lg-6 col-md-12 col-sm-12">
              <div className="inner">
                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg5} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">Greek Salad</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>$25.50</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Tomatoes, green bell pepper, sliced cucumber onion, olives,
                        and feta cheese.
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg6} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">
                            Lasagne <span className="s-info">SEASONAL</span>
                          </Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>$40.00</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Vegetables, cheeses, ground meats, tomato sauce, seasonings
                        and spices
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg7} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">Butternut Pumpkin</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>$10.00</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Typesetting industry lorem Lorem Ipsum is simply dummy text of
                        the priand.
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-col col-lg-6 col-md-12 col-sm-12">
              <div className="inner">

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg8} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">
                            Tokusen Wagyu <span className="s-info">NEW</span>
                          </Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>$39.00</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Vegetables, cheeses, ground meats, tomato sauce, seasonings
                        and spices.
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg9} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">Olivas Rellenas</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>$25.00</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Avocados with crab meat, red onion, crab salad stuffed red
                        bell pepper and green bell pepper.
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg10} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">Opu Fish</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>$49.00</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Vegetables, cheeses, ground meats, tomato sauce, seasonings
                        and spices
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Appetizers;
