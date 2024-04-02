import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bgone from '../../assets/images/background/marble.png'
import Bgtwo from '../../assets/images/background/marble.png'
import five from '../../assets/images/resource/5.png'
import six from '../../assets/images/resource/egg.png'
import seven from '../../assets/images/resource/avocado.png'
import eight from '../../assets/images/resource/greek.png'
import nine from '../../assets/images/resource/omlette.png'
import ten from '../../assets/images/resource/smothie.png'

function Menusection() {
    const [tabMenu, tabActive] = useState({ a: true });

    return (
        <>
            <section className="menu-section bg-white" >

                <div className="left-bg"><img src={bgone} alt="" title="" /></div>

                <div className="right-bg"><img src={Bgtwo} alt="" title="" /></div>

                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"style={{color:"black"}}><span>Special selection</span></div>

                        <div className="pattern-image">
                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2 style={{color:"black"}}>Delicious Menu</h2>
                    </div>

                    <div className="tabs-box menu-tabs">
                        <div className="buttons">
                            <ul className="tab-buttons clearfix">
                                <li className={`tab-btn ${tabMenu.a && "active-btn"}`} onClick={() => tabActive({ a: true })} data-tab="#tab-1"><span style={{color:"black"}}>MORNING</span></li>
                                <li className={`tab-btn ${tabMenu.b && "active-btn"}`} onClick={() => tabActive({ b: true })} data-tab="#tab-2"><span style={{color:"black"}}>WEEKDAY LUNCH</span></li>
                                <li className={`tab-btn ${tabMenu.c && "active-btn"}`} onClick={() => tabActive({ c: true })} data-tab="#tab-3"><span style={{color:"black"}}>DINNER</span></li>
                                <li className={`tab-btn ${tabMenu.d && "active-btn"}`} onClick={() => tabActive({ d: true })} data-tab="#tab-4"><span style={{color:"black"}}>DRINKS</span></li>
                            </ul>
                        </div>
                        <div className="tabs-content">

                            <div className={`tab ${tabMenu.a && "active-tab"}`} id="tab-1">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div>
                                                    <div className="title clearfix"><div ><h5><Link to="#"style={{color:"brown"}}>Healthy Panckes</Link></h5></div><div className="price"><span>20dt</span></div></div>
                                                    <div className="text desc"><Link to="#"style={{color:"black"}}>Bananas , oatmeal , egg , honey.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={six} alt="" /></Link></div>
                                                    <div className="title clearfix"><div ><h5><Link to="#"style={{color:"brown"}}> Healthy morning <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>25dt</span></div></div>
                                                    <div className="text desc"><Link to="#"style={{color:"black"}}>cup of tea/coffee, boiled egg, bowl of fruit</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={seven} alt="" /></Link></div>
                                                    <div className="title clearfix"><div ><h5><Link to="#"style={{color:"brown"}}>energetic</Link></h5></div><div className="price"><span>15dt</span></div></div>
                                                    <div className="text desc"><Link to="#"style={{color:"black"}}>Avocado Toast with Poached Egg and Tomato, nuts , cup of milk with scoop of honey.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={eight} alt="" /></Link></div>
                                                    <div className="title clearfix"><div ><h5><Link to="#"style={{color:"brown"}}>greek morning <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>25dt</span></div></div>
                                                    <div className="text desc"><Link to="#"style={{color:"black"}}>Greek Yogurt smashed with Granola and Berries with iced coffee.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={nine} alt="" /></Link></div>
                                                    <div className="title clearfix"><div ><h5><Link to="#"style={{color:"brown"}}>Salty one</Link></h5></div><div className="price"><span>25dt</span></div></div>
                                                    <div className="text desc"><Link to="#"style={{color:"black"}}>Vegetable Omelette with Whole Wheat Toast , Latte , bottle of water.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={ten} alt="" /></Link></div>
                                                    <div className="title clearfix"><div ><h5><Link to="#"style={{color:"brown"}}>Feeling Fresh</Link></h5></div><div className="price"><span>37dt</span></div></div>
                                                    <div className="text desc"><Link to="#"style={{color:"black"}}>Smoothie Bowl with Fresh Fruit and Seeds and a bottle of water</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab ${tabMenu.b && "active-tab"}`} id="tab-2">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Greek Salad</Link></h5></div><div className="price"><span>40dt</span></div></div>
                                                    <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese +desert+ bottle of water.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={six} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#"> Healthy Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>40dt</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices +desert+ bottle of water</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={seven} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Grilled Salmon with Steamed Vegetables</Link></h5></div><div className="price"><span>40dt</span></div></div>
                                                    <div className="text desc"><Link to="#">A lean source of protein paired with a variety of colorful vegetables makes for a nutritious and delicious meal +desert+ bottle of water.</Link></div>
                                                </div>
                                                <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={seven} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Vegetable Stir-Fry with Tofu</Link></h5></div><div className="price"><span>40dt</span></div></div>
                                                    <div className="text desc"><Link to="#">Stir-frying a mix of colorful vegetables with tofu provides a balanced meal rich in vitamins, minerals, and plant-based protein +desert+ bottle of water</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={eight} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Zucchini Noodles (Zoodles) with Marinara Sauce<span className="s-info">NEW</span></Link></h5></div><div className="price"><span>40dt</span></div></div>
                                                    <div className="text desc"><Link to="#">Using zucchini noodles instead of traditional pasta reduces calorie and carbohydrate intake while increasing vegetable servings. Top with a homemade marinara sauce for a healthy and flavorful dish .</Link></div>
                                                </div>
                                            </div>
                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={nine} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Grilled Chicken Salad with Avocado and Quinoa</Link></h5></div><div className="price"><span>40dt</span></div></div>
                                                    <div className="text desc"><Link to="#">A salad featuring grilled chicken, creamy avocado, and protein-rich quinoa is both filling and nutritious, providing a balance of macronutrients and plenty of vitamins and minerals+desert+ bottle of water.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={ten} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Baked Sweet Potato with Black Beans and Salsa</Link></h5></div><div className="price"><span>40dt</span></div></div>
                                                    <div className="text desc"><Link to="#">Sweet potatoes are loaded with vitamins and minerals, while black beans provide protein and fiber. Top with salsa for added flavor and a boost of antioxidants+desert+ bottle of water</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab ${tabMenu.c && "active-tab"}`} id="tab-3">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Vegetable Soup</Link></h5></div><div className="price"><span>40dt</span></div></div>
                                                    <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese +desert+ bottle of water.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={six} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">healthy casadillas <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>40dt</span></div></div>
                                                    <div className="text desc"><Link to="#"> Casadillas stuffed with Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices +desert+ bottle of water</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={seven} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">grills</Link></h5></div><div className="price"><span>40dt</span></div></div>
                                                    <div className="text desc"><Link to="#">Meat , chiken, fish +desert+ bottle of water </Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={eight} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>40dt </span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices+desert+ bottle of water.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={nine} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Salmon</Link></h5></div><div className="price"><span>40dt</span></div></div>
                                                    <div className="text desc"><Link to="#">Grilled Salmon with Quinoa and Roasted Vegetables +desert+ bottle of water</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={ten} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tofu and Rice</Link></h5></div><div className="price"><span>40dt</span></div></div>
                                                    <div className="text desc"><Link to="#">Stir-Fried Tofu with Mixed Vegetables and Brown Rice +desert+ bottle of water</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab ${tabMenu.d && "active-tab"}`} id="tab-4">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Mojito</Link></h5></div><div className="price"><span>15dt</span></div></div>
                                                    <div className="text desc"><Link to="#">gaz water , smashed fruit , Honey</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={six} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Coktail <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>15dt</span></div></div>
                                                    <div className="text desc"><Link to="#">a coktail of fruits , ice , milk </Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={seven} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Iced coffee</Link></h5></div><div className="price"><span>15dt</span></div></div>
                                                    <div className="text desc"><Link to="#">one shot esspresso , ice , oat milk , honey</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={eight} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Latte <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>15dt</span></div></div>
                                                    <div className="text desc"><Link to="#">Almond milk , coffee</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={nine} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Pink smothie</Link></h5></div><div className="price"><span>15dt</span></div></div>
                                                    <div className="text desc"><Link to="#">stawberry , blue Berries , milk , greek yoghurt</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={ten} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#"> Banana Smothie </Link></h5></div><div className="price"><span>15dt</span></div></div>
                                                    <div className="text desc"><Link to="#">banana , oat milk , honey</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="open-timing">
                        <div className="hours"style={{color:"brown"}}>During winter daily from <span className="theme_color"style={{color:"brown"}}>7:00 pm</span> to <span className="theme_color"style={{color:"brown"}}>9:00 pm</span></div>
                        <div className="link-box">
                            <Link to="#" className="theme-btn btn-style-two clearfix">
                                <span className="btn-wrap">
                                    <span className="text-one"style={{color:"black"}}>view all menu</span>
                                    <span className="text-two"style={{color:"black"}}>view all menu</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        
        </>
    )
}

export default Menusection