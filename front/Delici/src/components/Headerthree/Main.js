import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <>
            <div className="bg-video-wrap">
                <div className="overlay">
                </div>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="content">
                            <div className="inner">
                                <div className="subtitle"><span>delightful experience</span></div>
                                <div className="pattern-image">
                                    <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                </div>
                                <h1><span>Flavors Inspired by <br />the Seasons</span></h1>
                                <div className="text">Come with family & feel the joy of mouthwatering food</div>
                                <div className="links-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="link">
                                        <Link to="#" className="theme-btn btn-style-two clearfix">
                                            <span className="btn-wrap">
                                                <span className="text-one">view our menu</span>
                                                <span className="text-two">view our menu</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main