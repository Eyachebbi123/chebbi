import React from 'react'
import twoBg from '../../assets/images/background/salma.png';
import threebg from '../../assets/images/background/salma1.png';
import { Link } from 'react-router-dom'
import bgfive from '../../assets/images/background/salma1.png'
import bg12 from '../../assets/images/background/spark3.png'
import signaturetwo from '../../assets/images/resource/signa1.png'
import bg13 from '../../assets/images/background/spark3.png'

function Winningchef() {
    return (
        <>
            <section className="fluid-section">
                <div className="outer-container">
                    <div className="row clearfix">
                        <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image-layer" style={{ backgroundImage: `url(${twoBg})` }}></div>

                                <div className="image"><img src={bgfive} alt="" /></div>
                            </div>
                        </div>

                        <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="right-bg"><img src={bg12} alt="" title="" /></div>
                            <div className="inner clearfix wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="content-box">
                                    <div className="title-box centered">
                                        <div className="subtitle"><span>35 year of experience</span></div>
                                        <div className="pattern-image">
                                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                        </div>
                                        <h2>Award Winning Chef</h2>
                                        <div className="text">
Meet Chef Sarah, a culinary maestro with over 35 years of experience and the heart of a devoted mother. From her early days in the kitchen, Sarah's passion for cooking was ignited by the comforting aromas and warm memories of her family's meals. Over the years, she honed her skills and mastered the art of blending flavors, textures, and traditions to create dishes that not only delight the palate but also nourish the soul. As a mother herself, Sarah's approach to cooking is infused with love, care, and a deep understanding of the importance of wholesome, home-cooked meals. Her culinary journey is a testament to her dedication and resilience, as she navigated the ever-evolving landscape of the culinary world while raising her own family. Today, Chef Sarah stands as a pillar of wisdom and inspiration in the culinary community, sharing her expertise and passion with aspiring chefs and home cooks alike. With each dish she creates, Chef Sarah weaves together the rich tapestry of her culinary heritage, leaving a legacy of flavor, love, and family tradition for generations to come, </div>
                                    </div>
                                    <div className="info">
                                        <div className="signature"><img src={signaturetwo} alt="" title="" /></div>
                                        <div className="author">Salma - EXCUTIVE CHEF</div>
                                    </div>
                                    <div className="link-box">
                                        <Link to="#" className="theme-btn btn-style-two clearfix">
                                            <span className="btn-wrap">
                                                <span className="text-one">meet our team</span>
                                                <span className="text-two">meet our team</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="fluid-section alternate">
                <div className="outer-container">
                    <div className="row clearfix">

                        <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image-layer" style={{ backgroundImage: `url(${threebg})` }}></div>
                                <div className="image"><img src={threebg} alt="" /></div>
                            </div>
                        </div>

                        <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="left-bg"><img src={bg13} alt="" title="" /></div>
                            <div className="inner clearfix wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="content-box">
                                    <div className="title-box centered">
                                        <div className="subtitle"><span>Delightful Experience</span></div>

                                        <div className="pattern-image">
                                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                        </div>

                                        <h2>You don't have time to cook healthy food?</h2>
                                        <div className="text">In our fast-paced lives, finding time to cook healthy meals can seem impossible. Juggling work, family, and other commitments often leaves little room for meal preparation. As a result, many resort to quick and convenient but often unhealthy food options. Balancing priorities becomes a struggle, leading to a cycle of compromised nutrition and well-being. That's why Nutribite offers healthy food and you can subscribe for a month , week or per day</div>
                                    </div>
                                    <div className="link-box">
                                        <Link to="#" className="theme-btn btn-style-two clearfix">
                                            <span className="btn-wrap">
                                                <span className="text-one">Subscribe Now</span>
                                                <span className="text-two">Subscribe Now</span>
                                            </span>
                                        </Link>
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

export default Winningchef