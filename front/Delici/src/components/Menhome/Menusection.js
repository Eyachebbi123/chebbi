import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bgone from '../../assets/images/background/marble.png'
import Bgtwo from '../../assets/images/background/marble.png'
import five from '../../assets/images/resource/5.png'
import six from '../../assets/images/resource/egg.png'
import seven from '../../assets/images/resource/avocado.png'
import eight from '../../assets/images/resource/greek.png'
import nine from '../../assets/images/resource/omlette.png'
import ten from '../../assets/images/resource/smothie.png'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProducts } from '../../store/product'

function Menusection() {
    const [tabMenu, tabActive] = useState({ a: true });
    const products = useSelector((state) => state.product?.allProducts)
    console.log(products, "produccccccts");
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducts())

    }, [])
    const morningProducts = products.filter(product => product.Category.name === 'Morning');
    const lunchProducts = products.filter(product => product.Category.name === 'Lunch');
    const dinnerProducts = products.filter(product => product.Category.name === 'dinner');
    const drinkProducts = products.filter(product => product.Category.name === 'Drinks');
    console.log(dinnerProducts, "d");



    return (
        <>
            <section className="menu-section bg-white" >

                <div className="left-bg"><img src={bgone} alt="" title="" /></div>

                <div className="right-bg"><img src={Bgtwo} alt="" title="" /></div>

                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle" style={{ color: "black" }}><span>Special selection</span></div>

                        <div className="pattern-image">
                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2 style={{ color: "black" }}>Delicious Menu</h2>
                    </div>

                    {/* <div className="tabs-box menu-tabs">
                        <div className="buttons">
                            <ul className="tab-buttons clearfix">
                                <li className={`tab-btn ${tabMenu.a && "active-btn"}`} onClick={() => tabActive({ a: true })} data-tab="#tab-1"><span style={{ color: "black" }}>MORNING</span></li>
                                <li className={`tab-btn ${tabMenu.b && "active-btn"}`} onClick={() => tabActive({ b: true })} data-tab="#tab-2"><span style={{ color: "black" }}>WEEKDAY LUNCH</span></li>
                                <li className={`tab-btn ${tabMenu.c && "active-btn"}`} onClick={() => tabActive({ c: true })} data-tab="#tab-3"><span style={{ color: "black" }}>DINNER</span></li>
                                <li className={`tab-btn ${tabMenu.d && "active-btn"}`} onClick={() => tabActive({ d: true })} data-tab="#tab-4"><span style={{ color: "black" }}>DRINKS</span></li>
                            </ul>
                        </div>
                        <div className="tabs-content">

                            <div className={`tab ${tabMenu.a && "active-tab"}`} id="tab-1">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">
                                            {morningProducts?.map((elem) => (
                                                <div className="dish-block">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div>
                                                        <div className="title clearfix"><div ><h5><Link to={`/productDetail/${elem.id}`} style={{ color: "brown" }}>{elem.productName}</Link></h5></div><div className="price"><span>{elem.price}</span></div></div>
                                                        <div className="text desc"><Link to="#" style={{ color: "black" }}>{elem.description}</Link></div>
                                                    </div>
                                                </div>
                                            ))}

                                           
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                      
                                    </div>
                                </div>
                            </div>

                            <div className={`tab ${tabMenu.b && "active-tab"}`} id="tab-2">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">
                                            {lunchProducts?.map((elem) => (
                                                <div className="dish-block">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div>
                                                        <div className="title clearfix"><div><h5><Link to={`/productDetail/${elem.id}`} style={{ color: "brown" }}>{elem.productName}</Link></h5></div><div className="price"><span>{elem.price}</span></div></div>
                                                        <div className="text desc"><Link to="#" style={{ color: "black" }}>{elem.description}</Link></div>
                                                    </div>
                                                </div>
                                            ))}

                                           
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className={`tab ${tabMenu.c && "active-tab"}`} id="tab-3">
                                    <div className="row clearfix">
                                        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                            alooo
                                            <div className="inner">
                                                {dinnerProducts.map((elem) => (


                                                    <div className="dish-block">
                                                        
                                                        <div className="inner-box">
                                                            <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div>
                                                            <div className="title clearfix"><div><h5><Link to={`/productDetail/${elem.id}`} style={{ color: "brown" }}>{elem.productName}</Link></h5></div><div className="price"><span>{elem.price}</span></div></div>
                                                            <div className="text desc"><Link to="#" style={{ color: "black" }}>{elem.description}</Link></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            
                                            </div>
                                        </div>
                                   
                                    </div>
                                </div>

                                <div className={`tab ${tabMenu.d && "active-tab"}`} id="tab-4">
                                    <div className="row clearfix">
                                        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                            <div className="inner">
                                                {drinkProducts?.map((elem) => (

                                                    <div className="dish-block">
                                                        <div className="inner-box">
                                                            <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div>
                                                            <div className="title clearfix"><div><h5><Link to={`/productDetail/${elem.id}`} style={{ color: "brown" }}>{elem.productName}</Link></h5></div><div className="price"><span>{elem.price}</span></div></div>
                                                            <div className="text desc"><Link to="#" style={{ color: "black" }}>{elem.description}</Link></div>
                                                        </div>
                                                    </div>
                                                ))}
                                              
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="open-timing">
                            <div className="hours" style={{ color: "brown" }}>During winter daily from <span className="theme_color" style={{ color: "brown" }}>7:00 pm</span> to <span className="theme_color" style={{ color: "brown" }}>9:00 pm</span></div>
                            <div className="link-box">
                                <Link to="#" className="theme-btn btn-style-two clearfix">
                                    <span className="btn-wrap">
                                        <span className="text-one" style={{ color: "black" }}>view all menu</span>
                                        <span className="text-two" style={{ color: "black" }}>view all menu</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div> */}
                     <div className="tabs-box menu-tabs">
                        <div className="buttons">
                            <ul className="tab-buttons clearfix">
                                <li className={`tab-btn ${tabMenu.a && "active-btn"}`} onClick={() => tabActive({ a: true })} data-tab="#tab-1"><span style={{ color: "black" }}>MORNING</span></li>
                                <li className={`tab-btn ${tabMenu.b && "active-btn"}`} onClick={() => tabActive({ b: true })} data-tab="#tab-2"><span style={{ color: "black" }}>LUNCH</span></li>
                                <li className={`tab-btn ${tabMenu.c && "active-btn"}`} onClick={() => tabActive({ c: true })} data-tab="#tab-3"><span style={{ color: "black" }}>DINNER</span></li>
                                <li className={`tab-btn ${tabMenu.d && "active-btn"}`} onClick={() => tabActive({ d: true })} data-tab="#tab-4"><span style={{ color: "black" }}>DRINKS</span></li>
                            </ul>
                        </div>
                        <div className="tabs-content">

                            <div className={`tab ${tabMenu.a && "active-tab"}`} id="tab-1">
                                <div className="row clearfix">
                                    <div className="w-100">
                                    {morningProducts?.map((elem) => (
                                        
                                                <div className="dish-block d-flex justify-content-between ">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><Link to="#" ><img src={elem.imageURL} alt="" /></Link></div>
                                                        <div className="title clearfix"><div ><h5><Link to={`/productDetail/${elem.id}`} style={{ color: "brown" }}>{elem.productName}</Link></h5></div></div>
                                                        <div className="text desc"><Link to="#" style={{ color: "black" }}>{elem.description}</Link></div>
                                                    </div>
                                                    <div className="price text-dark"><span>{elem.price}</span></div>
                                                </div>
                                            
                                            ))}
                                       
                                    </div>
                                  
                                </div>
                            </div>

                            <div className={`tab ${tabMenu.b && "active-tab"}`} id="tab-2">
                                <div className="row clearfix">
                                    <div className="w-100">
                                        {/* <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Greek Salad</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                                    <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={six} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={seven} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                                </div>
                                            </div>
                                        </div> */} {lunchProducts?.map((elem) => (
                                                <div className="dish-block  d-flex justify-content-between ">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div>
                                                    <div className="title clearfix"><div><h5><Link to={`/productDetail/${elem.id}`} style={{ color: "brown" }}>{elem.productName}</Link></h5></div></div>
                                                    <div className="text desc"><Link to="#" style={{ color: "black" }}>{elem.description}</Link></div>
                                                </div>
                                                <div className="price text-dark"><span>{elem.price}</span></div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                </div>
                            </div>

                            <div className={`tab ${tabMenu.c && "active-tab"}`} id="tab-3">
                                <div className="row clearfix">
                                    <div className="w-100">
                                    
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">
                                        {dinnerProducts?.map((elem) => (
                                            <div className="dish-block d-flex justify-content-between">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={eight} alt="" /></Link></div>
                                                    <div className="title clearfix"><h5><Link to={`/productDetail/${elem.id}`} style={{ color: "brown" }}>{elem.productName}</Link></h5></div>
                                                    <div className="text desc"><Link to="#"style={{ color: "black" }}>{elem.description}</Link></div>
                                                </div>
                                                <div className="price text-dark"><span>{elem.price}</span></div>
                                            </div>
                                             ))}
                                            </div>
                                            {/* <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={nine} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Olivas Rellenas</Link></h5></div><div className="price"><span>$25.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and  green bell pepper.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={ten} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish</Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab ${tabMenu.d && "active-tab"}`} id="tab-4">
                                <div className="row clearfix">
                                    <div className="w-100">
                                        {/* <div className="inner"> */}
                                        {drinkProducts?.map((elem) => (
                                            <div className="dish-block d-flex justify-content-between ">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div>
                                                    <div className="title clearfix"><h5><Link to={`/productDetail/${elem.id}`} style={{ color: "brown" }}>{elem.productName}</Link></h5></div>
                                                    <div className="text desc"><Link to="#" style={{ color: "black" }}>{elem.description}</Link></div>
                                                </div>
                                                <div className="price text-dark"><span>{elem.price}</span></div>
                                            </div>
                                            ))}
                                            {/* <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={six} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={seven} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    {/* <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={eight} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={nine} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Olivas Rellenas</Link></h5></div><div className="price"><span>$25.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and  green bell pepper. Cucumber</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={ten} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish</Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </section>

        </>
    )
}

export default Menusection