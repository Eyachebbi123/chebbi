import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import bg22 from '../../../assets/images/background/spark.png'
import bg23 from '../../../assets/images/background/spark.png'
import menusdesertone from '../../../assets/images/resource/smothies.png'
import menusdrinksone from '../../../assets/images/resource/ice cream.png'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../store/product'

function Offers() {
    const products = useSelector((state) => state.product.products)
    console.log(products, "products");
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts('Fruit'))
    }, [])

    const FruitSmothie = products?.filter((elem) => {
        return elem.SubCategory.name === "Fruit smothie"
    })

    console.log(FruitSmothie, "FruitSmothie");

    const healthyfruitIceCream = products?.filter((elem) => {
        return elem.SubCategory.name === "healthy fruit ice cream"
    })


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
                                {FruitSmothie?.map((elem) => (
                                    <div className="dish-block">
                                        <div className="inner-box">
                                            <div className="title clearfix"><div className="ttl clearfix"><h5><Link to={`/productDetail/${elem.id}`}>{elem.productName}</Link></h5></div><div className="price"><span>{elem.price}</span></div></div>
                                            <div className="text desc"><Link to="#">{elem.description}</Link></div>
                                        </div>
                                    </div>

                                ))}


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
                                 {healthyfruitIceCream?.map((elem) => (
                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to={`/productDetail/${elem.id}`}>{elem.productName}</Link></h5></div><div className="price"><span>15dt</span></div></div>
                                        <div className="text desc"><Link to="#">{elem.description}</Link></div>
                                    </div>
                                </div>
                                 ))}

                            
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Offers