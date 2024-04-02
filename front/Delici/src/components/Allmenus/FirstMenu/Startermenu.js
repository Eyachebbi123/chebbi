import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import bgone from '../../../assets/images/background/spark.png'
import bgtwo from '../../../assets/images/background/spark.png'
import bgthree from '../../../assets/images/background/spark.png'
import menuone from '../../../assets/images/resource/saladf.png'
import menutwo from '../../../assets/images/resource/board.png'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../store/product'
function Startermenu() {
    const products = useSelector((state) => state.product.products)
    console.log(products, "products");
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <>
            <section className="menu-one">
                <div className="right-bg"><img src={bgone} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>CHOPPED ONES</span></div>
                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Fruit salad</h2>
                    </div>

                    <div className="row clearfix">
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image"><img src={menuone} alt="" /></div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner">
                                {products.map((elem) => (
                                    <div className="dish-block">
                                        <div className="inner-box">
                                            <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tropical Fruit Salad</Link></h5></div><div className="price"><span>13dt</span></div></div>
                                            <div className="text desc"><Link to="#">pineapple, mango , kiwi ,optional: shredded coconut for garnish.</Link></div>
                                        </div>
                                    </div>
                                ))}



                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="menu-one alternate">
                <div className="left-bg"><img src={bgtwo} alt="" title="" /></div>
                <div className="right-bg-2"><img src={bgthree} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>Delicious</span></div>

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Boards</h2>

                    </div>

                    <div className="row clearfix">
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image"><img src={menutwo} alt="" /></div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Classic Fruit Board</Link></h5></div><div className="price"><span>25dt</span></div></div>
                                        <div className="text desc"><Link to="#">watermelon , strawberries, oranges, kiwi, bunch of grapes, pineapple, mint leaves for a pop of color.</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tropical Fruit Board <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>30dt</span></div></div>
                                        <div className="text desc"><Link to="#">mango , papaya, pineapple,  coconut flakes, banana, kiwi </Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Berries and Cream Board</Link></h5></div><div className="price"><span>25dt</span></div></div>
                                        <div className="text desc"><Link to="#">Strawberries, blueberries, raspberries, blackberries,Greek yogurt,Sprinkle with granola or crushed nuts , Honey </Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Citrus Fruit Board <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>34dt</span></div></div>
                                        <div className="text desc"><Link to="#">orange, grapefruit, tangerine, lemon, sprinkle with a pinch of sea salt .</Link></div>
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

export default Startermenu