import React from 'react'
import Backgroundimage from '../../../assets/images/background/image-9.jpg';
import { Link } from 'react-router-dom'

function Secreservation() {
    return (
        <>
            <section className="online-reservation">

                <div className="image-layer" style={{ backgroundImage: `url(${Backgroundimage})` }}></div>

                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>special offer</span></div>

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Online Reservation</h2>
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
                            </div>
                            <button type="submit" className="theme-btn btn-style-one clearfix">
                                <span className="btn-wrap">
                                    <span className="text-one">book a table</span>
                                    <span className="text-two">book a table</span>
                                </span>
                            </button>
                        </form>
                        <div className="powered-by">*Powered by OpenTable</div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Secreservation