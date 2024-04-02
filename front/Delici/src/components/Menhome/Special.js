import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import menuimgone from '../../assets/images/resource/greeks.png';
import menuimgtwo from '../../assets/images/resource/quesa.png';
import menuimgthree from '../../assets/images/resource/pump.png';
import menuimgfour from '../../assets/images/resource/fish.png';


SwiperCore.use([Navigation]);


function Special() {
  const options = {
    slidesPerView: 4,
    spaceBetween: 45,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 7000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };


  return (
    <>
      <section className="special-offer">
        <div className="outer-container">
          <div className="auto-container">
            <div className="title-box centered">
              <div className="subtitle">
                <span>special offer</span>
              </div>
              <div className="pattern-image">
                <img src={require('../../assets/images/icons/separator.svg').default} alt="mySvgImage" />
              </div>
              <h2>Best Specialties</h2>

            </div>
            <Swiper className="dish-gallery-slider" {...options}
              loop={true}
              spaceBetween={45}
              slidesPerView={4}
              navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            >

              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgone} alt="" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="#">Greek Salad</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad red bell pepper...</div>
                  <div className="price">15dt</div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgtwo} alt="" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="#">Quesadillas</Link>
                  </h4>
                  <div className="text desc">Tomatoes, green bell pepper, sliced cucumber onion, olives...</div>
                  <div className="price">18dt</div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgthree} alt="" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">15dt</div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgfour} alt="" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="#">Grilled fish </Link>
                  </h4>
                  <div className="text desc">Vegetables, cheeses, fishs, seasonings...</div>
                  <div className="price">17dt</div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev">
              <span className="fal fa-angle-left"></span>
            </div>
            <div className="swiper-button-next">
              <span className="fal fa-angle-right"></span>
            </div>
            <div className="lower-link-box text-center">
              <Link to="#" className="theme-btn btn-style-two clearfix">
                <span className="btn-wrap">
                  <span className="text-one">view all menu</span>
                  <span className="text-two">view all menu</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}

export default Special;
