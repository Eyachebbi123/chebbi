import React from 'react'
import { Link } from 'react-router-dom'
import bg1 from '../../assets/images/background/marble.png'
import bg2 from '../../assets/images/background/marble.png'
import offerimg1 from '../../assets/images/resource/petitdej.png'
import offerimg2 from '../../assets/images/resource/appetizer.png'
import offerimg3 from '../../assets/images/resource/drinks.png'

function Offer() {

  const offers = [
    {
      image: offerimg1,
      title: 'Breakfast',
      link: '#'
    },
    {
      image: offerimg2,
      title: 'Appetizers',
      link: '#'
    },
    {
      image: offerimg3,
      title: 'Drinks',
      link: '#'
    }
  ];

  return (
    <>
      <section className="we-offer-section">
        <div className="left-bot-bg"><img src={bg1} alt="" title="" /></div>
        <div className="right-top-bg"><img src={bg2} alt="" title="" /></div>
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle"><span>Flavors for royalty</span></div>
            <div className="pattern-image">
              <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
            </div>
            <h2 style={{color:"black"}}> We Offer Top Notch</h2>
            <div className="text"style={{color:"black"}} >Step into "Nutribite," where every dish is a royal decree of taste and health. Our culinary artisans meticulously craft each meal with a regal touch, using the finest ingredients from local farmers' markets and sustainable sources. Indulge in the succulence of our grilled chicken marinated in a symphony of herbs and spices, or revel in the vibrant flavors of our roasted vegetable medley, kissed by the flames of the royal hearth. From quinoa salads adorned with jewels of pomegranate to chia seed parfaits fit for a king's breakfast, every bite at NobleBite is a coronation of health and flavor. Join us and dine like royalty, where each meal is a celebration of noble taste and well-being.</div>
          </div>
          <div className="row justify-content-center clearfix">
            {offers.map((offer, index) => (
              <div key={index} className="offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay={`${index * 300}ms`}>
                  <div className="image"><Link to="#"><img src={offer.image} alt="" /></Link></div>
                  <h3><Link to="#"style={{color:"black"}}>{offer.title}</Link></h3>
                  <div className="more-link"><Link to="#"style={{color:"black"}}>view menu</Link></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Offer
