import React from 'react'
import { Link } from 'react-router-dom'
import bg5 from '../../assets/images/background/black1.jpg'
import bg6 from '../../assets/images/background/black2.jpg'
import toronto from '../../assets/images/resource/toronto1.png'
import paris from '../../assets/images/resource/pariss.png'
import dubai from '../../assets/images/resource/dubai1.png'
import ny from '../../assets/images/resource/ny.png'

function Book() {
    return (
        <>
            <section className="online-reservation inner-page">
                <div className="left-bg"><img src={bg5} alt="" title="" /></div>
                <div className="right-bg"><img src={bg6} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>Reservation</span></div>
                        <div className="pattern-image"><img src={require('../../assets/images/icons/separator.svg').default} alt="" title="" /></div>

                        <h2>Book A Table</h2>
                        <div className="text desc">our chefs are ready to cook healthy meals for you from monday to sunday , payment will be when you take your food, you can reserve for a week , a month or per day  .</div>
                        <div className="text request-info">Booking request <Link to="#">+216 21319930</Link> or fill out the order form</div>
                    </div>
                    <div className="default-form reservation-form">
                        <form method="post" action="/">
                            <div className="row clearfix">
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
                                        <input className="l-icon datepicker" type="text" name="fieldname" value="" placeholder="DD-MM-YYYY" required readOnly />
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
                            </div>
                            <button type="submit" className="theme-btn btn-style-one clearfix">
                                <span className="btn-wrap">
                                    <span className="text-one">book a week</span>
                                    <span className="text-two">book a month</span>
                                </span>
                            </button>
                        </form>
                        <div className="powered-by">*Powered by OpenTable</div>
                    </div>
                </div>

                <div className="map-location-section">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="row clearfix">
                                <div className="reserv-col col-lg-8 col-md-12 col-sm-12">
                                    <div className="inner">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81392.11276571127!2d-74.03116502768826!3d40.70144849986174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1667928043843!5m2!1sen!2sin" width="100%" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                                <div className="info-col col-lg-4 col-md-12 col-sm-12">
                                    <div className="inner">
                                        <div className="title">
                                            <h2>Tunisia</h2>
                                        </div>
                                        <div className="data">
                                            <ul className="info">
                                                <li><strong>Contact Us</strong><br />Restaurant St, Tunisia,<br /> <br /> Call : +216 21319930 <br /> Email : Nutribite@gmail.com </li>
                                                <div className="separator"><span></span></div>
                                                <li><strong>Lunch Time</strong><br />Monday to Sunday <br />11.00 am - 2.30pm</li>
                                                <li><strong>Dinner Time</strong><br />Monday to Sunday <br />05.00 pm - 10.00pm</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="location-center">
                    <div className="auto-container">
                        <div className="row clearfix">

                            <div className="location-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                    <div className="icon-box"><img src={ny} alt="" /></div>
                                    <h4>New York</h4>
                                    <div className="text">Restaurant St, Delicious City, NY. <br /> +88-123-123456<br />booking@domainname.com</div>
                                    <div className="more-link"><Link to="#">get direction</Link></div>
                                </div>
                            </div>


                            <div className="location-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                    <div className="icon-box"><img src={dubai} alt="" /></div>
                                    <h4>Dubai</h4>
                                    <div className="text">520, Delicious City, Revenu Db.<br />+88-123-123456<br />booking@domainname.com</div>
                                    <div className="more-link"><Link to="#">get direction</Link></div>
                                </div>
                            </div>


                            <div className="location-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                    <div className="icon-box"><img src={paris} alt="" /></div>
                                    <h4>Paris</h4>
                                    <div className="text">589, Delicious Avenue PS.<br />+88-123-123456 <br /> booking@domainname.com</div>
                                    <div className="more-link"><Link to="#">get direction</Link></div>
                                </div>
                            </div>


                            <div className="location-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="900ms">
                                    <div className="icon-box"><img src={toronto} alt="" /></div>
                                    <h4>Toronto</h4>
                                    <div className="text">Restaurant St, Delicious City, CA <br /> +88-123-123456 <br /> booking@domainname.com</div>
                                    <div className="more-link"><Link to="#">get direction</Link></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Book