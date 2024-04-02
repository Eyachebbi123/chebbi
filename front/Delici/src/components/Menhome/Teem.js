import React from 'react'
import { Link } from 'react-router-dom'
import bg21 from '../../assets/images/background/bg-21.png'
import bg9 from '../../assets/images/background/spark.png'
import teamone from '../../assets/images/resource/Hajer.jpg'
import teamtwo from '../../assets/images/resource/hajer1.jpg'
import teamthree from '../../assets/images/resource/ayouta.jpg'

function Teem() {
    return (
        <>
            <section className="team-section">
                <div className="left-bg"><img src={bg21} alt="" title="" /></div>
                <div className="right-bg"><img src={bg9} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>experienced team</span></div>

                        <div className="pattern-image">
                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Meet Our Chef</h2>
                    </div>
                    <div className="row justify-content-center clearfix">

                        <div className="team-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image">
                                    <img src={teamone} alt="" />
                                    <div className="overlay-box">
                                        <div className="overlay-inner">

                                            <ul className="social-box">
                                                <li><Link to="https://www.facebook.com/" className="fab fa-facebook-f"></Link></li>
                                                <li><Link to="https://www.twitter.com/" className="fab fa-twitter"></Link></li>
                                                <li><Link to="https://dribbble.com/" className="fab fa-dribbble"></Link></li>
                                                <li><Link to="https://www.linkedin.com/" className="fab fa-linkedin"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h3><Link to="#">Chebbi Sarah</Link></h3>
                                <div className="designation">Master chef</div>
                                <div className="text desc">Sarah, the epitome of warmth and culinary creativity, effortlessly embodies the role of the quintessential home mom who cooks with passion and flair. With her apron tied securely around her waist and a spatula in hand, she navigates the kitchen with ease, infusing her dishes with love and care, transforming simple ingredients into culinary masterpieces that delight the senses and warm the soul.</div>
                            </div>
                        </div>


                        <div className="team-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                <div className="image">
                                    <img src={teamtwo} alt="" />
                                    <div className="overlay-box">
                                        <div className="overlay-inner">

                                            <ul className="social-box">
                                                <li><Link to="https://www.facebook.com/" className="fab fa-facebook-f"></Link></li>
                                                <li><Link to="https://www.twitter.com/" className="fab fa-twitter"></Link></li>
                                                <li><Link to="https://dribbble.com/" className="fab fa-dribbble"></Link></li>
                                                <li><Link to="https://www.linkedin.com/" className="fab fa-linkedin"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h3><Link to="#">Hajer Kadri</Link></h3>
                                <div className="designation">Master Chef</div>
                                <div className="text desc">Hajer, a nurturing home mom, exudes warmth and culinary skill as she effortlessly commands her kitchen. With an apron snugly tied around her waist and a spatula in hand, she infuses each dish with love, turning ordinary ingredients into delightful creations that satisfy both the palate and the soul.</div>
                            </div>
                        </div>

                        <div className="team-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                <div className="image">
                                    <img src={teamthree} alt="" />
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <ul className="social-box">
                                                <li><Link to="https://www.facebook.com/" className="fab fa-facebook-f"></Link></li>
                                                <li><Link to="https://www.twitter.com/" className="fab fa-twitter"></Link></li>
                                                <li><Link to="https://dribbble.com/" className="fab fa-dribbble"></Link></li>
                                                <li><Link to="https://www.linkedin.com/" className="fab fa-linkedin"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h3><Link to="#">Eya Riahi</Link></h3>
                                <div className="designation">Master Chef</div>
                                <div className="text desc">Eya, the heart of her home, wields her kitchen like a seasoned artist. With an apron tied snugly around her waist and a whisk in hand, she orchestrates culinary symphonies that tantalize the taste buds and warm the heart. Her passion for cooking shines through in every dish she prepares, transforming simple ingredients into gastronomic delights that leave her loved ones craving for more.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Teem