import React from 'react'
import { Link } from 'react-router-dom'
import menuimg5 from '../../../assets/images/resource/menu-image-5.png'
import menuimg6 from '../../../assets/images/resource/menu-image-6.png'
import menuimg7 from '../../../assets/images/resource/menu-image-7.png'
import menuimg8 from '../../../assets/images/resource/menu-image-8.png'
import menuimg9 from '../../../assets/images/resource/menu-image-9.png'
import menuimg10 from '../../../assets/images/resource/menu-image-10.png'
import bg20 from '../../../assets/images/background/bg-20.png'
import featured8 from '../../../assets/images/resource/featured-8.jpg'
import featured9 from '../../../assets/images/resource/featured-9.jpg'
import featured10 from '../../../assets/images/resource/featured-10.jpg'
import featured11 from '../../../assets/images/resource/featured-11.jpg'


function Listmenu() {
    return (
        <>
            <section className="menu-two">
                <div className="left-bg"><img src={bg20} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>RESERVATIONS</span></div>
                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>List Menu</h2>

                    </div>
                    <div className="row clearfix">
                        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link to="#"><img src={menuimg5} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Greek Salad</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                        <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link to="#"><img src={menuimg6} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                        <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link to="#"><img src={menuimg7} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                        <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link to="#"><img src={menuimg8} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                        <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link to="#"><img src={menuimg9} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Olivas Rellenas</Link></h5></div><div className="price"><span>$25.00</span></div></div>
                                        <div className="text desc"><Link to="#">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and  green bell pepper.</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link to="#"><img src={menuimg10} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish</Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                        <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

export default Listmenu