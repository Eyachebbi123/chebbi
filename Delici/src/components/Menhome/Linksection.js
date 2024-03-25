import React from 'react'
import { Link } from 'react-router-dom'
import Imgthree from '../../assets/images/resource/featured-1.jpg'
import Imgfour from '../../assets/images/resource/featured-2.jpg'
import Imgfive from '../../assets/images/resource/featured-3.jpg'

function Linksection() {
    return (
        <>
            <section className="featured-links">
                <div className="outer-container">
                    <div className="row clearfix">

                        <div className="link-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="text-block">
                                    <div className="bl-inner">
                                        <div className="content">
                                            <div className="subtitle">best menu</div>
                                            <h3>Special Dishes</h3>
                                            <div className="text">Mixed Grill</div>
                                            <div className="link"><Link to="#" className="theme-btn"><span>view menu</span></Link></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="image-box">
                                    <div className="image-layer" style={{ backgroundImage: `url(${Imgthree})` }}></div>
                                    <div className="image">
                                        <img src={Imgthree} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="link-block alternate col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                <div className="image-box">
                                    <div className="image-layer" style={{ backgroundImage: `url(${Imgfour})` }}></div>
                                    <div className="image">
                                        <img src={Imgfour} alt="" />
                                    </div>
                                </div>
                                <div className="text-block">
                                    <div className="bl-inner">
                                        <div className="content">
                                            <div className="subtitle">Latest</div>
                                            <h3>Upcoming Events</h3>
                                            <div className="text">Tasting Food</div>
                                            <div className="link"><Link to="#" className="theme-btn"><span>join event</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="link-block col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="inner wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                <div className="text-block">
                                    <div className="bl-inner">
                                        <div className="content">
                                            <div className="subtitle"> selected </div>
                                            <h3>Chef Choice</h3>
                                            <div className="text"> Healthy pasta </div>
                                            <div className="link"><Link to="#" className="theme-btn"><span>view menu</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="image-box">
                                    <div className="image-layer" style={{ backgroundImage: `url(${Imgfive})` }}></div>
                                    <div className="image"><img src={Imgfive} alt="" /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Linksection