import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedNumber from "animated-number-react"
import Iframe from 'react-iframe';
import bgten from '../../assets/images/background/spark.png'
import bgeleven from '../../assets/images/background/spark4.png'
import signatureone from '../../assets/images/resource/chefep.png'
import aboutimgone from '../../assets/images/background/kitchen2.png'
import aboutimgtwo from '../../assets/images/resource/salad1.png'

function Aboutsec() {

    const [Video, setVideo] = useState();

    return (
        <>
            <section className="about-section">
                <div className="left-bg"><img src={bgten} alt="" title="" /></div>
                <div className="right-bg"><img src={bgeleven} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>who we are</span></div>

                        <div className="pattern-image">
                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h3>
In a cozy neighborhood, "Nutribite" thrived as a haven for wholesome meals and warm hospitality. Led by me and my team of dedicated home's moms, the restaurant offered a menu brimming with nutritious delights crafted from locally sourced ingredients. From hearty soups to flavorful grain bowls, each dish radiated the love and care of home cooking. Patrons found comfort and connection in the inviting atmosphere, making Nutribite Table a cherished gathering spot where delicious food and heartfelt conversations flowed freel <span className="theme_color">since 8 years</span>. Enjoy our seasonal menu and experience the beauty of naturalness</h3>
                    </div>
                    <div className="row clearfix">

                        <div className="about-block content-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="text">"Take care of your body. It's the only place you have to live." .</div>
                                <div className="signature"><img src={signatureone} alt="" title="" /></div>
                                <div className="author">Eya Chebbi- founder</div>
                                <div className="video-box">
                                    <div className="image"><Link to="https://www.youtube.com/watch?v=ZETY_l3GVQg" className="lightbox-image"><img src={aboutimgtwo} alt="" /></Link>
                                        <Link to="#" className="lightbox-image play-btn" onClick={() => setVideo(true)}>
                                            <span className="icon fal fa-play">
                                                <i className="ripple"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="about-block image-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                <div className="image"><img src={aboutimgone} alt="" /></div>
                            </div>
                        </div>


                        <div className="about-block info-block col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                <ul className="info">
                                    <li><strong>Lunch Time</strong>Monday to Sunday <br />11.00 am - 2.30pm</li>
                                    <li><strong>Dinner Time</strong>Monday to Sunday <br />5.30 pm - 11.30 pm</li>
                                    <li className="separator"><span></span></li>
                                    <li><strong>Contact Us</strong><span className="address">Tunisia , 30 Marsa </span> <Link to="tel:+88-123-123456">+216 21319930</Link> <br /><Link to="mailto:reservation@restro.com">Nutribite@gmail.com</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="fact-counter">
                        <div className="row clearfix">
                            <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner clearfix">
                                    <div className="fact-count"><div className="count-box">
                                        <AnimatedNumber className="count-text" value={150} duration={2000} formatValue={(v) => Math.round(v)} />
                                        <i>+</i></div></div>
                                    <div className="fact-title">daily order</div>
                                </div>
                            </div>
                            <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner clearfix">
                                    <div className="fact-count"><div className="count-box">
                                        <AnimatedNumber className="count-text" value={82} duration={1500} formatValue={(v) => Math.round(v)} />
                                        <i>+</i></div></div>
                                    <div className="fact-title">Special Dishes</div>
                                </div>
                            </div>
                            <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner clearfix">
                                    <div className="fact-count"><div className="count-box">
                                        <AnimatedNumber className="count-text" value={35} duration={1000} formatValue={(v) => Math.round(v)} />
                                        <i>+</i></div></div>
                                    <div className="fact-title">expert chef</div>
                                </div>
                            </div>
                            <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner clearfix">
                                    <div className="fact-count"><div className="count-box">
                                        <AnimatedNumber className="count-text" value={10} duration={1000} formatValue={(v) => Math.round(v)} />
                                        <i>+</i></div></div>
                                    <div className="fact-title">awards won</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {Video &&
                    <div className={`fancybox-container fancybox-is-open fancybox-can-drag fancybox-can-drag ${Video && "fancybox-is-closing"} fancybox-show-toolbar`} onClick={() => { setVideo(false) }} role="dialog" tabindex="-1" id="fancybox-container-9" style={{ transitionDuration: "500ms" }}>
                        <div className="fancybox-bg"></div>
                        <div className="fancybox-inner">
                            <div className="fancybox-infobar">
                                <span data-fancybox-index="">1</span>&nbsp;/&nbsp;
                                <span data-fancybox-count="">1</span>
                            </div>
                            <div className="fancybox-toolbar">
                                <button data-fancybox-play="" className="fancybox-button fancybox-button--play" title="Start slideshow" style={{ display: "none" }}>
                                    <svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z"></path>
                                        <path d="M15,10 v19 M23,10 v19"></path>
                                    </svg>
                                </button>

                                <button data-fancybox-fullscreen="" className="fancybox-button fancybox-button--fullscreen" title="Full screen">
                                    <svg viewBox="0 0 40 40">
                                        <path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z"></path>
                                    </svg>
                                </button>
                                <button data-fancybox-thumbs="" className="fancybox-button fancybox-button--thumbs" title="Thumbnails" style={{ display: "none" }}>
                                    <svg viewBox="0 0 120 120">
                                        <path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z"></path>
                                    </svg>
                                </button>
                                <button data-fancybox-share="" className="fancybox-button fancybox-button--share" title="Share">
                                    <svg viewBox="0 0 40 40">
                                        <path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></path>
                                    </svg>
                                </button>
                                <button data-fancybox-close="" onClick={() => setVideo(false)} className="fancybox-button fancybox-button--close" title="Close">
                                    <svg viewBox="0 0 40 40">
                                        <path d="M10,10 L30,30 M30,10 L10,30" />
                                    </svg>
                                </button>
                            </div>
                            <div className="fancybox-navigation">
                                <button data-fancybox-prev="" className="fancybox-button fancybox-button--arrow_left" title="Previous" >
                                    <svg viewBox="0 0 40 40">
                                        <path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20" />
                                    </svg>
                                </button>
                                <button data-fancybox-next="" className="fancybox-button fancybox-button--arrow_right" title="Next">
                                    <svg viewBox="0 0 40 40" >
                                        <path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20" />
                                    </svg>
                                </button>
                            </div>
                            <div className="fancybox-stage">
                                <div className="fancybox-slide fancybox-slide--iframe fancybox-slide--video fancybox-slide--current fancybox-slide--complete">
                                    <div className="fancybox-content">
                                        <Iframe id="fancybox-frame1671797716315" name="fancybox-frame1671797716315" className="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allowtransparency="true" src="//www.youtube.com/embed/ZETY_l3GVQg?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=1&amp;html5=1" scrolling="no"></Iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="fancybox-caption-wrap">
                                <div className="fancybox-caption"></div>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </>
    )
}

export default Aboutsec