import React from "react";
import { Link } from "react-router-dom";
import bg19 from "../../../assets/images/background/bg-19.png";
import bg20 from "../../../assets/images/background/bg-20.png";
import menuimg5 from "../../../assets/images/resource/menu-image-5.png";
import menuimg6 from "../../../assets/images/resource/menu-image-6.png";
import menuimg7 from "../../../assets/images/resource/menu-image-7.png";
import menuimg8 from "../../../assets/images/resource/menu-image-8.png";
import menuimg9 from "../../../assets/images/resource/menu-image-9.png";
import menuimg10 from "../../../assets/images/resource/menu-image-10.png";

function Appetizers() {
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
                          <Link to="#">Garden Salad</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>20dt</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                      Mixed greens (lettuce, spinach, arugula), cherry tomatoes, cucumber slices, shredded carrots, bell pepper strips, red onion slices, Dressing: Balsamic vinaigrette or olive oil and lemon juice.
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg6} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">
                          Caesar Salad <span className="s-info">SEASONAL</span>
                          </Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>20dt</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                      Romaine lettuce, croutons, shaved Parmesan cheese, Dressing: Caesar dressing (made with anchovies, garlic, Dijon mustard, olive oil, egg yolk, lemon juice, and Parmesan cheese)
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg7} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">Greek Salad</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>20dt</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                      Cucumber slices, cherry tomatoes, Kalamata olives, red onion slices, bell pepper strips, feta cheese, oregano ,Dressing: Olive oil, lemon juice, red wine vinegar, garlic, oregano
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-col col-lg-6 col-md-12 col-sm-12">
              <div className="inner">

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg8} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">
                          Cobb Salad <span className="s-info">NEW</span>
                          </Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>20dt</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                      Mixed greens, grilled chicken breast strips, hard-boiled eggs (sliced), avocado slices, bacon bits, cherry tomatoes, blue cheese crumbles.
Dressing: Creamy ranch or blue cheese dressing.
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg9} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">Caprese Salad</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>20dt</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                      Fresh tomatoes (sliced), fresh mozzarella cheese (sliced), fresh basil leaves ,Dressing: Balsamic glaze, olive oil, salt, and pepper
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg10} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">Taco Salad</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>20dt</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                      Mixed greens, seasoned ground beef or turkey, black beans, corn kernels, diced tomatoes, shredded cheddar cheese, sliced avocado, tortilla strips ,Dressing: Salsa or a cilantro lime vinaigrette
                      </Link>
                    </div>
                  </div>
                </div>
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
                          <Link to="#">Asian Noodle Salad</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>20dt</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                      Cooked soba or rice noodles, shredded cabbage, carrots (julienned), bell peppers (sliced), edamame, green onions (chopped), cilantro ,Dressing: Soy sauce, rice vinegar, sesame oil, ginger, garlic, honey.
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg6} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">
                          Quinoa Salad <span className="s-info">SEASONAL</span>
                          </Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>20dt</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                      Cooked quinoa, diced cucumber, cherry tomatoes (halved), black beans, corn kernels, diced red onion, fresh cilantro ,Dressing: Lime juice, olive oil, cumin, salt, and pepper
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg7} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">Spinach Strawberry Salad</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>20dt</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                      Baby spinach leaves, sliced strawberries, sliced almonds, crumbled feta cheese, red onion (thinly sliced) ,Dressing: Balsamic vinaigrette or a poppy seed dressing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-col col-lg-6 col-md-12 col-sm-12">
              <div className="inner">

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg8} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">
                          Beet and Goat Cheese Salad <span className="s-info">NEW</span>
                          </Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>20dt</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Vegetables, cheeses, ground meats, tomato sauce, seasonings
                        and spices.
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg9} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">Olivas Rellenas</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>$25.00</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Avocados with crab meat, red onion, crab salad stuffed red
                        bell pepper and green bell pepper.
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="dish-block">
                  <div className="inner-box">
                    <div className="dish-image">
                      <Link to="#">
                        <img src={menuimg10} alt="" />
                      </Link>
                    </div>
                    <div className="title clearfix">
                      <div className="ttl clearfix">
                        <h5>
                          <Link to="#">Opu Fish</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <span>$49.00</span>
                      </div>
                    </div>
                    <div className="text desc">
                      <Link to="#">
                        Vegetables, cheeses, ground meats, tomato sauce, seasonings
                        and spices
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Appetizers;
