import React, { useState } from 'react';
import Imgtwo from '../../assets/images/background/banana.png';
import { Link } from 'react-router-dom';
import AnimatedNumber from 'animated-number-react';
import Iframe from 'react-iframe';

function Videosection() {
    const [video, setVideo] = useState();

    return (
        <>
            <section className="intro-section">
                <div className="image-layer" style={{ backgroundImage: `url(${Imgtwo})` }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="title-box centered">
                            <div className="subtitle"><span>amazing experience</span></div>

                            <div className="pattern-image">
                                <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                            </div>

                            <h2>Watch Our Video</h2>
                        </div>

                        <div className="play-btn">
                            <Link to="#" onClick={() => setVideo(true)} className="lightbox-image theme-btn">
                                <span className="icon fal fa-play">
                                    <i className="ripple"> </i>
                                </span>
                            </Link>
                        </div>
                        <div className="separator"><span></span><span></span><span></span></div>
                        <h3>A modern restaurant with a menu that will make your mouth water.</h3>
                        <div className="auth-title">Eya Riahi - Master chef</div>
                    </div>

                    <div className="fact-counter">
                        <div className="row clearfix">
                            <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner clearfix">
                                    <div className="fact-count"><div className="count-box">
                                        <AnimatedNumber className="count-text" value={150} duration={2000} formatValue={(v) => Math.round(v)} />
                                        <i>+</i></div></div>
                                    <div className="fact-title">daily <br />order</div>

                                </div>
                            </div>
                            <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner clearfix">
                                    <div className="fact-count"><div className="count-box">
                                        <AnimatedNumber className="count-text" value={82} duration={1500} formatValue={(v) => Math.round(v)} />
                                        <i>+</i></div></div>
                                    <div className="fact-title">Special <br />Dishes</div>
                                </div>
                            </div>
                            <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner clearfix">
                                    <div className="fact-count"><div className="count-box">
                                        <AnimatedNumber className="count-text" value={35} duration={1000} formatValue={(v) => Math.round(v)} />
                                        <i>+</i></div></div>
                                    <div className="fact-title">expert <br />chef</div>
                                </div>
                            </div>
                            <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner clearfix">
                                    <div className="fact-count"><div className="count-box">
                                        <AnimatedNumber className="count-text" value={10} duration={1000} formatValue={(v) => Math.round(v)} />
                                        <i>+</i></div></div>
                                    <div className="fact-title">awards <br />won</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {video &&
                    <div className={`fancybox-container fancybox-is-open fancybox-can-drag fancybox-can-drag ${video && "fancybox-is-closing"} fancybox-show-toolbar`} onClick={() => { setVideo(false) }} role="dialog" tabindex="-1" id="fancybox-container-9" style={{ transitionDuration: "500ms" }}>
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

export default Videosection