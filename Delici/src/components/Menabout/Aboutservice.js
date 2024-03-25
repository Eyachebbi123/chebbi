import React from 'react'
import bg14 from '../../assets/images/background/bg-14.png'
import bg15 from '../../assets/images/background/bg-15.png'
import siconone from '../../assets/images/resource/logoo.png'
import sicontwo from '../../assets/images/resource/logoo.png'
import siconthree from '../../assets/images/resource/logoo.png'
import siconfour from '../../assets/images/resource/logoo.png'
import service from '../../assets/images/background/kitchen1.png'


function Aboutservice() {
    return (
        <>
            <section className="services-section">
               
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>our services</span></div>

                        <div className="pattern-image">
                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2> Our Variety</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="s-col col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="s-block">
                                    <div className="inner">
                                        <div className="icon-box"><img src={siconone} alt="" title="" /></div>
                                        <h4>Salads</h4>
                                        <div className="text">Indulge in a variety of salads at our restaurant, each offering a unique blend of flavors and textures. From classic Caesar to refreshing Mediterranean, protein-packed quinoa, and seasonal specialties, there's something to suit every taste bud. Enjoy the freshest ingredients and vibrant combinations in every bite.</div>
                                    </div>
                                </div>
                                <div className="s-block alternate">
                                    <div className="inner">
                                        <div className="icon-box"><img src={sicontwo} alt="" title="" /></div>
                                        <h4>Grill and Soups</h4>
                                        <div className="text">Indulge in our mouthwatering grilled specialties and comforting soups. From juicy meats and seafood to flavorful vegetables, our grills offer a satisfying experience. Pair them with our hearty soups, crafted with premium ingredients for a comforting meal. Join us for a delicious journey of grilled delights and soul-warming soups</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="s-col last col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="s-block alternate">
                                    <div className="inner">
                                        <div className="icon-box"><img src={siconthree} alt="" title="" /></div>
                                        <h4>Fruit</h4>
                                        <div className="text">we have a variety type of fruits , salads , ice-cream fruit ,fruit boards</div>
                                    </div>
                                </div>
                                <div className="s-block">
                                    <div className="inner">
                                        <div className="icon-box"><img src={siconfour} alt="" title="" /></div>
                                        <h4>Whole pack</h4>
                                        <div className="text">You can also order a whole breakfast , lunch , dinner.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-col col-lg-4 col-md-12 col-sm-12">
                            <div className="inner wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image-box"><img src={service} alt="" title="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutservice