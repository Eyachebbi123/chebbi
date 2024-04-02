import React from 'react'
import bg26 from '../../assets/images/background/chef2.png'
import mainchef from '../../assets/images/resource/lachef.png'
import signature from '../../assets/images/resource/signa1.png'

function Chefsection() {
    return (
        <>
            <section className="chef-section">
                <div className="right-bg"><img src={bg26} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image"><img src={mainchef} alt="" /></div>
                            </div>
                        </div>

                        <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner clearfix wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="content-box">
                                    <div className="title-box">
                                        <div className="subtitle"><span>35 year of experience</span></div>
                                        <div className="pattern-image">
                                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                        </div>
                                        <h2>Award Winning Chef</h2>
                                        <div className="text">Introducing Chef Salma Amri , a culinary master and devoted mother with over 35 years of experience. Her culinary journey, from cherished family recipes to prestigious awards, reflects her unwavering dedication and passion for food. With each dish, Chef Maria's skill and love shine through, earning her recognition in top culinary competitions and the hearts of food lovers everywhere. Her ability to balance motherhood and a thriving career exemplifies her strength and resilience, making her an inspiration to aspiring chefs and parents alike.





.</div>
                                    </div>
                                    <div className="info">
                                        <div className="signature"><img src={signature} alt="" title="" /></div>
                                        <div className="author">Salma - EXCUTIVE CHEF</div>
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

export default Chefsection