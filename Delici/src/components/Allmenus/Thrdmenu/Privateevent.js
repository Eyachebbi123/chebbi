import React from 'react';
import { Link } from 'react-router-dom';
import featured8 from '../../../assets/images/resource/featured-8.jpg'
import featured9 from '../../../assets/images/resource/featured-9.jpg'
import featured10 from '../../../assets/images/resource/featured-10.jpg'
import featured11 from '../../../assets/images/resource/featured-11.jpg'


function Privateevent() {
    return (
        <>
            <section className="featured-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="text-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">

                                <div className="content">
                                    <div className="content-inner">
                                        <h2>Private Events</h2>
                                        <div className="text">Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.</div>
                                        <div className="separator"><span></span></div>
                                        <div className="booking-info">
                                            <div className="bk-title">Booking request</div>
                                            <div className="bk-no"><Link to="tel:+88-123-123456">+88-123-123456</Link></div>
                                        </div>
                                        <div className="link-box">
                                            <Link to="#" className="theme-btn btn-style-one clearfix">
                                                <span className="btn-wrap">
                                                    <span className="text-one">Book Now</span>
                                                    <span className="text-two">Book Now</span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="row clearfix">
                                    <div className="img-col col-lg-6 col-md-6 col-sm-6"><div className="image"><img src={featured8} alt="" /></div></div>
                                    <div className="img-col col-lg-6 col-md-6 col-sm-6"><div className="image"><img src={featured9} alt="" /></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-section alternate">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="text-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">

                                <div className="content">
                                    <div className="content-inner">
                                        <h2>Banquet Hall</h2>
                                        <div className="text">Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.</div>
                                        <div className="separator"><span></span></div>
                                        <div className="booking-info">
                                            <div className="bk-title">Booking request</div>
                                            <div className="bk-no"><Link to="tel:+88-123-123456">+88-123-123456</Link></div>
                                        </div>
                                        <div className="link-box">
                                            <Link to="#" className="theme-btn btn-style-one clearfix">
                                                <span className="btn-wrap">
                                                    <span className="text-one">Book Now</span>
                                                    <span className="text-two">Book Now</span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="row clearfix">
                                    <div className="img-col col-lg-6 col-md-6 col-sm-6"><div className="image"><img src={featured10} alt="" /></div></div>
                                    <div className="img-col col-lg-6 col-md-6 col-sm-6"><div className="image"><img src={featured11} alt="" /></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Privateevent