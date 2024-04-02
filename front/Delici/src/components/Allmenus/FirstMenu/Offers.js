import React from 'react'
import { Link } from 'react-router-dom'
import bg22 from '../../../assets/images/background/spark.png'
import bg23 from '../../../assets/images/background/spark.png'
import menusdesertone from '../../../assets/images/resource/smothies.png'
import menusdrinksone from '../../../assets/images/resource/ice cream.png'

function Offers() {
    return (
        <>
            <section className="menu-one">
                <div className="left-bg"><img src={bg22} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>Freshness</span></div>

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Fruit smothie</h2>
                    </div>

                    <div className="row clearfix">
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image"><img src={menusdesertone} alt="" /></div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Banana smothie</Link></h5></div><div className="price"><span>15dt</span></div></div>
                                        <div className="text desc"><Link to="#">Bananas , Milk , Honey , Nuts.</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Mango smothie <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>12dt</span></div></div>
                                        <div className="text desc"><Link to="#"> Mango, Milk , Honey </Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Peach smothie</Link></h5></div><div className="price"><span>12dt</span></div></div>
                                        <div className="text desc"><Link to="#">Peach , Milk , Honey , vanilla yoghurt</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Stawberry smothie <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>12dt</span></div></div>
                                        <div className="text desc"><Link to="#">Starwberry , Milk , Honey , Dark chocolate.</Link></div>
                                    </div>
                                </div>
                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Green Goddess Smoothie</Link></h5></div><div className="price"><span>12dt</span></div></div>
                                        <div className="text desc"><Link to="#">spinach leaves , cucumber,avocado , pineapple ,mint.</Link></div>
                                    </div>
                                </div>
                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tropical Paradise Smoothie</Link></h5></div><div className="price"><span>12dt</span></div></div>
                                        <div className="text desc"><Link to="#">mango , pineapple ,cocount milk ,orange juice , chia seeds,Ice cubes (optional).</Link></div>
                                    </div>
                                </div>
                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Minty Green Apple Smoothie</Link></h5></div><div className="price"><span>12dt</span></div></div>
                                        <div className="text desc"><Link to="#">green apple , spinach , mint , lemon , yoghurt,Ice cubes (optional)</Link></div>
                                    </div>
                                </div>
                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Chocolate Cherry Almond Smoothie</Link></h5></div><div className="price"><span>12dt</span></div></div>
                                        <div className="text desc"><Link to="#">frozen cherries, cocoa powder,almond butter, milk ,Ice cubes (optional) .</Link></div>
                                    </div>
                                </div>
                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Pinacolada</Link></h5></div><div className="price"><span>12dt</span></div></div>
                                        <div className="text desc"><Link to="#">pineapple, cocount water , ginger , honey</Link></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="menu-one alternate">
                <div className="right-bg-2"><img src={bg23} alt="" title="" /></div>
                <div className="auto-container">

                    <div className="title-box centered">
                        <div className="subtitle"><span>Coldness</span></div>

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Healthy fruit ice-cream</h2>
                    </div>

                    <div className="row clearfix">
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image"><img src={menusdrinksone} alt="" /></div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Banana Nice Cream</Link></h5></div><div className="price"><span>15dt</span></div></div>
                                        <div className="text desc"><Link to="#">ripe bananas, peeled, sliced, and frozen,nut butter, vanilla</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Coconut Avocado Lime Ice Cream<span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>15dt</span></div></div>
                                        <div className="text desc"><Link to="#">ripe avocados, peeled and pitted , limes,cocount milk , maple syrup</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Mixed Berry Frozen Yogurt</Link></h5></div><div className="price"><span>15dt</span></div></div>
                                        <div className="text desc"><Link to="#">mixed berries,Greek yogurt,honey,ice.</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Chocolate Avocado Ice Cream <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>15dt</span></div></div>
                                        <div className="text desc"><Link to="#">avocados,unsweetened cocoa powder,pinch of salt,shredded coconut.</Link></div>
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

export default Offers