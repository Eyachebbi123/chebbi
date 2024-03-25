import React from "react";
import One from '../../assets/images/resource/goodf.png'
import Two from '../../assets/images/resource/fresh.png'
import Three from '../../assets/images/resource/cheff.png'
import Four from '../../assets/images/resource/grille.png'
import Iconone from '../../assets/images/resource/logoo.png'
import Icontwo from '../../assets/images/resource/logoo.png'
import Iconthree from '../../assets/images/resource/logoo.png'
import Iconfour from '../../assets/images/resource/logoo.png'

function Aboutwhyus() {

  return (
    <>
      <section className="why-us-two">
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">
              <span>why choose us</span>
            </div>
            <div className="pattern-image">
              <img src={require('../../assets/images/icons/separator.svg').default} alt="" title="" />
            </div>
            <h2>Our Strength</h2>
          </div>
          <div className="row clearfix">
            <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms" >
                <div className="image-box">
                  <img src={One} alt="" />
                </div>
                <div className="over-box">
                  <div className="icon-box">
                    <img src={Iconone} alt="" />
                  </div>
                  <h4>Hygienic Food</h4>
                </div>
              </div>
            </div>

            <div className="why-block-two m-top col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms" >
                <div className="image-box">
                  <img src={Two} alt="" />
                </div>
                <div className="over-box">
                  <div className="icon-box">
                    <img src={Icontwo} alt="" />
                  </div>
                  <h4>Fresh Environment</h4>
                </div>
              </div>
            </div>

            <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms" >
                <div className="image-box">
                  <img src={Three} alt="" />
                </div>
                <div className="over-box">
                  <div className="icon-box">
                    <img src={Iconthree} alt="" />
                  </div>
                  <h4>Skilled Chefs</h4>
                </div>
              </div>
            </div>

            <div className="why-block-two m-top col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="900ms" >
                <div className="image-box">
                  <img src={Four} alt="" />
                </div>
                <div className="over-box">
                  <div className="icon-box">
                    <img src={Iconfour} alt="" />
                  </div>
                  <h4>Event &amp; Party</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutwhyus;
