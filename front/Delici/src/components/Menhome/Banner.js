import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slideone from '../../assets/images/background/felfel.png';
import Slidetwo from '../../assets/images/background/oranges.jpg';
import Slidethree from '../../assets/images/background/lemon.png';
import bookicon1 from '../../assets/images/background/oranges.jpg';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';


SwiperCore.use([Navigation]);

function Banner() {
    return (
        <Swiper
            className="banner-section banner-section-coustm"
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} // Use "navigation" with lowercase, and place it outside the SwiperSlide elements
        >
            <div className="banner-container">
                <div className="banner-slider">
                    <div className="swiper-wrapper">
                        {[Slideone, Slidetwo, Slidethree].map((image, index) => (
                            <SwiperSlide key={index} className="swiper-slide slide-item img-fluid" style={{ backgroundImage: `url(${image})` ,backgroundRepeat:"no-repeat", objectFit:"cover"}}>
                                <div className="auto-container"style={{color:'black'}} >
                                    <div className="content-box">
                                        <div className="content" style={{color:'black'}}>
                                            <div className="clearfix">
                                                <div className="inner">
                                                    <div className="subtitle" style={{color:index === 0 ?"#d9021a" : index === 1? "green" : "black"}}>
                                                        <span>Very healthy experience</span>
                                                    </div>
                                                    <div className="pattern-image">
                                                        <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                                    </div>
                                                    <h1><span style={{color:"black"}}>{index === 0 ? 'Flavors Inspired by' : index === 1 ? 'Where every flavor' : 'For the love of'}<br />{index === 0 ? 'the Seasons' : index === 1 ? 'tells a story' : 'delicious food'}</span></h1>
                                                    <div className="text">Order with family & feel the joy of mouthwatering healthy food</div>
                                                    <div className="links-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="link">
                                                            <Link to="#" className="theme-btn btn-style-two clearfix">
                                                                <span  className="btn-wrap">
                                                                    <span style={{color:"black"}} className="text-one">view our menu</span>
                                                                    <span style={{color:"black"}} className="text-two">view our menu</span>
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </div>
            </div>
            <div className="swiper-button-prev">
                <span className="fal fa-angle-left"></span>
            </div>
            <div className="swiper-button-next">
                <span className="fal fa-angle-right"></span>
            </div>
            <div className="book-btn">
                <Link to="#" className="theme-btn">
                    <span className="icon">
                        <img src={bookicon1} alt="" title="" />
                    </span>
                    <span className="txt">subscribe</span>
                </Link>
            </div>
        </Swiper>
    );
}

export default Banner;
