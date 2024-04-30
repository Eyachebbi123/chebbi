import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bg19 from "../../../assets/images/background/bg-19.png";
import bg20 from "../../../assets/images/background/bg-20.png";
import menuimg5 from "../../../assets/images/resource/menu-image-5.png";
import menuimg6 from "../../../assets/images/resource/menu-image-6.png";
import menuimg7 from "../../../assets/images/resource/menu-image-7.png";
import menuimg8 from "../../../assets/images/resource/menu-image-8.png";
import menuimg9 from "../../../assets/images/resource/menu-image-9.png";
import menuimg10 from "../../../assets/images/resource/menu-image-10.png";
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../store/product'
function Appetizers() {
  const products = useSelector((state) => state.product.products)
    console.log(products, "products");
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts('salads'))
    }, [])

    const freshness = products?.filter((elem) => {
    console.log("freshness");

        return elem.SubCategory.name === "freshness"

    })


    const anotherSalads = products?.filter((elem) => {
      return elem.SubCategory.name === "another salads"
  })

  // console.log(anotherSalads, "anotherSalads");
  return (
    <>
      <section className="menu-two">
        <div className="right-bg">
          <img src={bg19} alt="" title="" />
        </div>
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">
              <span>OUR SALADS</span>
            </div>
            <div className="pattern-image">
              <img src={require("../../../assets/images/icons/separator.svg").default} alt="mySvgImage" />
            </div>
            <h2>Freshness</h2>
          </div>
          <div className="row clearfix">
            <div className="menu-col col-lg-6 col-md-12 col-sm-12">
              <div className="inner">
              {freshness?.map((elem) => (
                <div className="dish-block">
                  <div className="inner-box">  
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg5} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to={`/productDetail/${elem.id}`}>{elem.productName}</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>{elem.price}</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                      {elem.description}
                      </Link>
                    </div>
                  </div>
                </div>
 ))}
               

              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="menu-two">
        <div className="left-bg">
          <img src={bg20} alt="" title="" />
        </div>
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">
              <span>fresh &amp; hygine</span>
            </div>
            <div className="pattern-image">
              <img src={require("../../../assets/images/icons/separator.svg").default} alt="" title="" />
            </div>
            <h2>Another Salads !</h2>
          </div>
          <div className="row clearfix">
            <div className="menu-col col-lg-6 col-md-12 col-sm-12">
              <div className="inner">
              {anotherSalads?.map((elem) => (
                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg5} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to={`/productDetail/${elem.id}`}>{elem.productName}</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>{elem.price}</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                      {elem.description}
                      </Link>
                    </div>
                  </div>
                </div>
                ))}


                
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Appetizers;
