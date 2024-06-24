import React, { useEffect }  from 'react'
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
        dispatch(getProducts('Fruit'))
        
    }, [])
    
    console.log(products, "productssssssss");

    const board = products?.filter((elem) => {
        return elem.SubCategory.name === "board"
    })

    console.log(board, "board");

    const FruitSalade = products?.filter((elem) => {
        return elem.SubCategory.name === "Fruit salad"
    })

    console.log(FruitSalade, "Fruit Salad");

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
                                {FruitSalade.map((elem) => (
                                    <div className="dish-block">
                                        <div className="inner-box">
                                            <div className="title clearfix"><div className="ttl clearfix"><h5><Link to={`/productDetail/${elem.id}`}>{elem.productName}</Link></h5></div><div className="price"><span>13dt</span></div></div>
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
                            {board?.map((elem) => (

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to={`/productDetail/${elem.id}`}>{elem.productName}</Link></h5></div><div className="price"><span>25dt</span></div></div>
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

export default Startermenu