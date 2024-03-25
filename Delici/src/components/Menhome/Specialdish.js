import React from 'react'
import { Link } from 'react-router-dom'
import Backgroundoffer from '../../assets/images/resource/lobster5.png';
import record3 from '../../assets/images/resource/image-3.png'
import recordbg1 from '../../assets/images/background/marble.png'
import recordbg2 from '../../assets/images/background/marble.png'
import recordbg3 from '../../assets/images/background/marble.png'

function Specialdish() {
    return (
        <>
            <section className="special-dish">
                
                <div className="outer-container">
                    <div className="row clearfix">
                        <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image-layer" style={{ backgroundImage: `url(${Backgroundoffer})` }}></div>
                                
                            </div>
                        </div>
                        <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            
                            <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">

                                <div className="title-box">
                                    
                                    <div className="subtitle"><span>Special dish</span></div>

                                    <div className="pattern-image">
                                        <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                    </div>

                                    <h2>Lobster Tortellini</h2>
                                    <div className="text"> a decadent delight marrying plump lobster meat with delicate pasta pockets, bathed in a rich, creamy sauce. It's a harmonious symphony of flavors and textures, an indulgence fit for any occasion..</div>
                                </div>

                                <div className="price"><span className="old">50 dt</span> <span className="new">40dt</span></div>
                                <div className="link-box">
                                    <Link to="#" className="theme-btn btn-style-two clearfix">
                                        <span className="btn-wrap">
                                            <span className="text-one">view all menu</span>
                                            <span className="text-two">view all menu</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Specialdish