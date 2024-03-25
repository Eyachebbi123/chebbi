import React from 'react'
import { Link } from 'react-router-dom'
import new1 from '../../assets/images/resource/grill.png'
import new2 from '../../assets/images/resource/event.png'
import new3 from '../../assets/images/resource/open.png'


function Recntupdates() {
  return (
    <>
      <section className="news-section">
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle"><span>recent updates</span></div>

            <div className="pattern-image">
              <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
            </div>

            <h2> Upcoming Event </h2>
          </div>

          <div className="row justify-content-center clearfix">

            <div className="news-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <div className="image-box">
                  <div className="date"><span>15/09/2025</span></div>
                  <div className="image"><Link to="#"><img src={new2} alt="" /></Link></div>
                  <div className="over-content">
                    <div className="cat">Festival eat</div>
                    <h4><Link to="#">An open day with stands of a lot of other restaurant.</Link></h4>
                  </div>
                </div>
              </div>
            </div>


            <div className="news-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                <div className="image-box">
                  <div className="date"><span>08/09/2025</span></div>
                  <div className="image"><Link to="#"><img src={new1} alt="" /></Link></div>
                  <div className="over-content">
                    <div className="cat">Grill day !</div>
                    <h4><Link to="#">grilled meat , fish , chiken .</Link></h4>
                  </div>
                </div>
              </div>
            </div>


            <div className="news-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                <div className="image-box">
                  <div className="date"><span>03/09/2025</span></div>
                  <div className="image"><Link to="#"><img src={new3} alt="" /></Link></div>
                  <div className="over-content">
                    <div className="cat">Open day!</div>
                    <h4><Link to="#">An open day to tast all our specialities</Link></h4>
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

export default Recntupdates