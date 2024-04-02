import React from 'react'
import { Link } from 'react-router-dom'

import badge1 from '../../assets/images/resource/bdg1.jpg'
import img1 from '../../assets/images/resource/storyf.png'


function Story() {
    return (
        <>
            <section className="story-section">
               
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="text-col col-xl-5 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="title-box centered">
                                    <div className="subtitle">
                                        <span> Our story </span>
                                    </div>
                                    <div className="pattern-image">
                                        <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                    </div>
                                    <h2>Every Flavor Tells a Story</h2>
                                    <div className="text">
"Our healthy food is delicious." This succinct statement encapsulates the essence of our restaurant's culinary ethos, emphasizing the delightful taste of our nutritious offerings.Healthy food isn't just about nourishing your body; it can be incredibly delicious too. Picture a colorful plate filled with crisp, vibrant vegetables bursting with flavor, paired with lean proteins and wholesome grains. Imagine the satisfying crunch of a fresh salad, the juiciness of ripe fruits, and the burst of sweetness from natural ingredients. Healthy meals are a symphony of tastes and textures, from the earthy richness of roasted vegetables to the delicate sweetness of grilled fish. With the right seasoning and cooking techniques, healthy food becomes a culinary delight that tantalizes the taste buds and leaves you feeling satisfied and energized. So, next time you're craving something delicious, remember that healthy food can be just as yummy as it is nutritious.




</div>
                                </div>
                                <div className="booking-info">
                                    <div className="bk-title">Book Through Call</div>
                                    <div className="bk-no"><Link to="tel:+80-400-123456">+216 21319930</Link></div>
                                    <div className="link-box">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="image-col col-xl-7 col-lg-7 col-md-12 col-sm-12">
                            <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="round-stamp"><img src={badge1} alt="" /></div>
                                <div className="images parallax-scene-1">
                                    <div className="image" data-depth="0.15"><img src={img1} alt="" /></div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Story