import React from 'react'
import { Link } from 'react-router-dom'
import Bgone from '../../../assets/images/background/spark.png'
import Bgtwo from '../../../assets/images/background/spark.png';

function Reservation() {
    return (
        <>
            <section className="reserve-section style-two">
                <div className="image-layer" style={{ backgroundImage: `url(${Bgone})` }}></div>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row clearfix">
                            <div className="reserv-col col-lg-8 col-md-12 col-sm-12">
                                <div className="inner">
                                    <div className="title">
                                        <h2>Online Reservation</h2>
                                        <div className="request-info">Booking request <Link to="#">+216 21319930</Link> or fill out the order form</div>
                                    </div>
                                    <div className="default-form reservation-form">
                                        <form method="post" action="/">
                                            <div className="row clearfix">
                                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                    <div className="field-inner">
                                                        <input type="text" name="fieldname" placeholder="Your Name" required />
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                    <div className="field-inner">
                                                        <input type="text" name="fieldname" placeholder="Phone Number" required />
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                                    <div className="field-inner">
                                                        <span className="alt-icon far fa-user"></span>
                                                        <select className="l-icon">
                                                            <option>1 Person</option>
                                                            <option>2 Person</option>
                                                            <option>3 Person</option>
                                                            <option>4 Person</option>
                                                            <option>5 Person</option>
                                                            <option>6 Person</option>
                                                            <option>7 Person</option>
                                                        </select>
                                                        <span className="arrow-icon far fa-angle-down"></span>
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                                    <div className="field-inner">
                                                        <span className="alt-icon far fa-calendar"></span>
                                                        <input className="l-icon datepicker" type="text" name="fieldname" placeholder="DD-MM-YYYY" required readOnly />
                                                        <span className="arrow-icon far fa-angle-down"></span>
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-4 col-md-12 col-sm-12">
                                                    <div className="field-inner">
                                                        <span className="alt-icon far fa-clock"></span>
                                                        <select className="l-icon">
                                                            <option>08 : 00 am</option>
                                                            <option>09 : 00 am</option>
                                                            <option>10 : 00 am</option>
                                                            <option>11 : 00 am</option>
                                                            <option>12 : 00 pm</option>
                                                            <option>01 : 00 pm</option>
                                                            <option>02 : 00 pm</option>
                                                            <option>03 : 00 pm</option>
                                                            <option>04 : 00 pm</option>
                                                            <option>05 : 00 pm</option>
                                                            <option>06 : 00 pm</option>
                                                            <option>07 : 00 pm</option>
                                                            <option>08 : 00 pm</option>
                                                            <option>09 : 00 pm</option>
                                                            <option>10 : 00 pm</option>
                                                        </select>
                                                        <span className="arrow-icon far fa-angle-down"></span>
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <div className="field-inner">
                                                        <textarea name="fieldname" placeholder="Message" required></textarea>
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <div className="field-inner">
                                                        <button type="submit" className="theme-btn btn-style-one clearfix">
                                                            <span className="btn-wrap">
                                                                <span className="text-one">make a subscription</span>
                                                                <span className="text-two">make a subscription</span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="info-col col-lg-4 col-md-12 col-sm-12">
                                <div className="inner">
                                    <div className="img-layer" style={{ backgroundImage: `url(${Bgtwo})` }}></div>

                                    <div className="title">
                                        <div className="subtitle">hot deal</div>
                                        <h5>Lunch & Dinner Specials</h5>
                                    </div>

                                    <div className="data">
                                        <div className="discount-info">
                                            <div className="s-ttl">up to</div>
                                            <div className="num">45%</div>
                                            <div className="s-ttl">discount</div>
                                        </div>
                                        <div className="instruction">
                                            • Not valid for online order <br />
                                            • Non-refundable <br />
                                            • Offer end on 25 Jan <br />
                                        </div>
                                        <div className="link-box">
                                            <Link to="#" className="theme-btn btn-style-one clearfix">
                                                <span className="btn-wrap">
                                                    <span className="text-one">subscribe now</span>
                                                    <span className="text-two">subscribe now</span>
                                                </span>
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
    )
}

export default Reservation