import React from 'react'
import { Link } from 'react-router-dom'
import One from '../../assets/images/resource/unsplash.png'
import Two from '../../assets/images/resource/blackkk.jpg'
import Three from '../../assets/images/resource/unsplash.png'
import Sone from '../../assets/images/resource/featured-1.jpg'
import Stwo from '../../assets/images/resource/featured-2.jpg'
import Sthree from '../../assets/images/resource/featured-3.jpg'

function Feature() {
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
                                            <div className="text">
                                                mixed grilled
                                            </div>
                                            <div className="link">
                                                <Link to="/menuone" className="theme-btn">
                                                    <span>view menu</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="image-box">
                                    <div className="image-layer" style={{ backgroundImage: `url(${One})` }} />
                                    <div className="image">
                                        <img src={Sone} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="link-block alternate col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                <div className="image-box">
                                    <div className="image-layer" style={{ backgroundImage: `url(${Two})` }} />
                                    <div className="image">
                                        <img src={Stwo} alt="" />
                                    </div>
                                </div>
                                <div className="text-block">
                                    <div className="bl-inner">
                                        <div className="content">
                                            <div className="subtitle">Latest</div>
                                            <h3>Upcoming Events</h3>
                                            <div className="text">Healthy food festival.</div>
                                            <div className="link">
                                                <Link to="/menutwo" className="theme-btn">
                                                    <span>join event</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="link-block col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="inner wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms" >
                                <div className="text-block">
                                    <div className="bl-inner">
                                        <div className="content">
                                            <div className="subtitle">selected</div>
                                            <h3>Chef Choice</h3>
                                            <div className="text">pumpkin soup with lobster.</div>
                                            <div className="link">
                                                <Link to="/menuthree" className="theme-btn">
                                                    <span>view menu</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="image-box">
                                    <div className="image-layer" style={{ backgroundImage: `url(${Three})` }} />
                                    <div className="image">
                                        <img src={Sthree} alt="" />
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

export default Feature