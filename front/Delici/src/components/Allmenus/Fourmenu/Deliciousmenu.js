import React from 'react'
import { Link } from 'react-router-dom'
import bg5 from '../../../assets/images/background/bg-5.png'
import bg6 from '../../../assets/images/background/bg-6.png'
import menuimage5 from '../../../assets/images/resource/menu-image-5.png'
import menuimage6 from '../../../assets/images/resource/menu-image-6.png'
import menuimage7 from '../../../assets/images/resource/menu-image-7.png'
import menuimage8 from '../../../assets/images/resource/menu-image-8.png'
import menuimage9 from '../../../assets/images/resource/menu-image-9.png'
import menuimage10 from '../../../assets/images/resource/menu-image-10.png'
import drink1 from '../../../assets/images/resource/drink-1.png'
import drink2 from '../../../assets/images/resource/drink-2.png'
import drink3 from '../../../assets/images/resource/drink-3.png'
import drink4 from '../../../assets/images/resource/drink-4.png'
import drink5 from '../../../assets/images/resource/drink-5.png'
import drink6 from '../../../assets/images/resource/drink-6.png'


function Deliciousmenu() {
    return (
        <>
            <section className="menu-section">
                <div className="left-bg"><img src={bg5} alt="" title="" /></div>
                <div className="right-bg"><img src={bg6} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>Special selection</span></div>

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Delicious Menu</h2>
                    </div>

                    <div className="tabs-box menu-tabs">
                        <div className="buttons">
                            <ul className="tab-buttons clearfix">
                                <li className="tab-btn active-btn" data-tab="#tab-1"><span>MORNING</span></li>
                                <li className="tab-btn" data-tab="#tab-2"><span>WEEKDAY LUNCH</span></li>
                                <li className="tab-btn" data-tab="#tab-3"><span>DINNER</span></li>
                                <li className="tab-btn" data-tab="#tab-4"><span>DRINKS</span></li>
                            </ul>
                        </div>
                        <div className="tabs-content">

                            <div className="tab active-tab" id="tab-1">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage5} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">AAAAA</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                                    <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage6} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage7} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage8} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage9} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Olivas Rellenas</Link></h5></div><div className="price"><span>$25.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and  green bell pepper.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage10} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish</Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab" id="tab-2">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage6} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">AAAAA</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                                    <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage7} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Greek Salad </Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage5} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu<span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage7} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin </Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage8} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Olivas Rellenas</Link></h5></div><div className="price"><span>$25.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and  green bell pepper.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage9} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish<span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab" id="tab-3">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage7} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                                    <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage6} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage6} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage9} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage9} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Olivas Rellenas</Link></h5></div><div className="price"><span>$25.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and  green bell pepper.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={menuimage8} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish</Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab" id="tab-4">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={drink1} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Greek Salad</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                                    <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={drink2} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={drink3} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={drink4} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={drink5} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Olivas Rellenas</Link></h5></div><div className="price"><span>$25.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and  green bell pepper. Cucumber</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={drink6} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish</Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="open-timing">
                        <div className="hours">During winter daily from <span className="theme_color">7:00 pm</span> to <span className="theme_color">9:00 pm</span></div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Deliciousmenu