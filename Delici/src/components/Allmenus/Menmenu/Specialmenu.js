import React from "react";
import { Link } from "react-router-dom";
import Backgroundimage from "../../../assets/images/background/image-8.jpg";
import bg19 from "../../../assets/images/background/bg-19.png";
import bg20 from "../../../assets/images/background/bg-20.png";
import img8 from "../../../assets/images/background/image-8.jpg";
import badgeone from "../../../assets/images/resource/badge-2.png";
import One from '../../../assets/images/resource/menu-image-11.jpg'
import Two from '../../../assets/images/resource/menu-image-12.jpg'
import Three from '../../../assets/images/resource/menu-image-13.jpg'
import Four from '../../../assets/images/resource/menu-image-14.jpg'
import Five from '../../../assets/images/resource/menu-image-15.jpg'
import Six from '../../../assets/images/resource/menu-image-16.jpg'
import Seven from '../../../assets/images/resource/menu-image-17.jpg'
import Eight from '../../../assets/images/resource/menu-image-18.jpg'


function Specialmenu() {

  return (
    <>
      <section className="special-offer-two">
          <div className="left-bg">
            <img src={bg20} alt="" title="" />
          </div>
          <div className="right-bg">
            <img src={bg19} alt="" title="" />
          </div>
          <div className="auto-container">
            <div className="title-box centered">
              <div className="subtitle">
                <span>special offer</span>
              </div>
              <div className="pattern-image">
                <img src={require("../../../assets/images/icons/separator.svg").default} alt="" title="" />
              </div>
              <h2>Best Special Menu</h2>
            </div>
            <div className="row clearfix">
              <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                  <div className="image">
                    <Link to="#">
                      <img src={One} alt="" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/menu">Greek Salad</Link>
                  </h4>
                  <div className="text desc">
                    Avocados with crab meat, red onion, crab salad red bell pepper...
                  </div>
                  <div className="price">$39.00</div>
                </div>
              </div>

              <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                  <div className="image">
                    <Link to="#">
                      <img src={Two} alt="" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/menu">Tokusen Wagyu</Link>
                  </h4>
                  <div className="text desc">
                    Tomatoes, green bell pepper, sliced cucumber onion, olives...
                  </div>
                  <div className="price">$45.00</div>
                </div>
              </div>

              <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms" >
                  <div className="image">
                    <Link to="#">
                      <img src={Three} alt="" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/menu">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">
                    Avocados with crab meat, red onion, crab salad stuffed bell
                    pepper...
                  </div>
                  <div className="price">$15.00</div>
                </div>
              </div>

              <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                  <div className="image">
                    <Link to="#">
                      <img src={Four} alt="" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/menu">Opu Fish</Link>
                  </h4>
                  <div className="text desc">
                    Vegetables, cheeses, ground meats, tomato sauce, seasonings...
                  </div>
                  <div className="price">$12.00</div>
                </div>
              </div>
              <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms" >
                  <div className="image">
                    <Link to="#">
                      <img src={Five} alt="" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/menu">Greek Salad</Link>
                  </h4>
                  <div className="text desc">
                    Avocados with crab meat, red onion, crab salad red bell pepper...
                  </div>
                  <div className="price">$39.00</div>
                </div>
              </div>

              <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms" >
                  <div className="image">
                    <Link to="#">
                      <img src={Six} alt="" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/menu">Tokusen Wagyu</Link>
                  </h4>
                  <div className="text desc">
                    Tomatoes, green bell pepper, sliced cucumber onion, olives...
                  </div>
                  <div className="price">$45.00</div>
                </div>
              </div>

              <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms" >
                  <div className="image">
                    <Link to="#">
                      <img src={Seven} alt="" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/menu">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">
                    Avocados with crab meat, red onion, crab salad stuffed bell
                    pepper...
                  </div>
                  <div className="price">$15.00</div>
                </div>
              </div>

              <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms" >
                  <div className="image">
                    <Link to="#">
                      <img src={Eight} alt="" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/menu">Opu Fish</Link>
                  </h4>
                  <div className="text desc">
                    Vegetables, cheeses, ground meats, tomato sauce, seasonings...
                  </div>
                  <div className="price">$12.00</div>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section className="chef-selection">
          <div className="auto-container">
            <div className="outer-container">
              <div className="row clearfix">
                <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="inner wow fadeInLeft"
                    data-wow-duration="1500ms" data-wow-delay="0ms">
                    <div className="image-layer" style={{ backgroundImage: `url(${Backgroundimage})` }}></div>
                    <div className="image">
                      <img src={img8} alt="" />
                    </div>
                  </div>
                </div>

                <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                    <div className="title-box">
                      <span className="badge-icon">
                        <img src={badgeone} alt="" title="" />
                      </span>
                      <div className="subtitle">
                        <span>chef selection</span>
                      </div>

                      <div className="pattern-image">
                        <img src={require("../../../assets/images/icons/separator.svg").default} alt="mySvgImage" />
                      </div>

                      <h3>Lobster Tortellini</h3>
                      <div className="text">
                        Lorem Ipsum is simply dummy text of the printingand
                        typesetting industry lorem Ipsum has been the industrys
                        standard dummy text ever since.
                      </div>
                    </div>
                    <div className="price">
                      <span className="old">$40.00</span>{" "}
                      <span className="new">$20.00</span>
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

export default Specialmenu;
