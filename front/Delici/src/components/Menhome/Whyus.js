import React from 'react';
import bg8 from '../../assets/images/background/marble.png';
import bg7 from '../../assets/images/background/marble.png';
import whyiconone from '../../assets/images/background/kitchenn.png';
import whyicontwo from '../../assets/images/resource/freshness.png';
import whyiconthree from '../../assets/images/background/chefss.png';
import whyiconfour from '../../assets/images/resource/grill.png';

function Whyus() {
  const whyData = [
    {
      icon: whyiconone,
      title: 'Home made and clean food ',
      text: 'every chef here is a mom who s trying her best to satisfy you !'
    },
    {
      icon: whyicontwo,
      title: 'Fresh Environment',
      text: 'We are using fresh food right from the farm .',
    },
    {
      icon: whyiconthree,
      title: 'Skilled Chefs',
      text: 'We are working with the best chefs !',
    },
    {
      icon: whyiconfour,
      title: 'Perfect grill',
      text: 'Fresh meat , fish and chiken !',
    },
  ];

  return (
    <>
      <section className="why-us">
        {/* <div className="left-bg">
          <img src={bg8} alt="" title="" />
        </div>
        <div className="right-bg">
          <img src={bg7} alt="" title="" />
        </div> */}
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">
              <span>why choose us</span>
            </div>
            <div className="pattern-image">
              <img
                src={require('../../assets/images/icons/separator.svg').default}
                alt="mySvgImage"
              />
            </div>

            <h2>Our Strength</h2>
          </div>
          <div className="row clearfix">
            {whyData.map((data, index) => (
              <div key={index} className="why-block col-xl-3 col-lg-6 col-md-6 col-sm-12"
              >
                <div
                  className="inner-box wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay={`${index * 300}ms`}
                >
                  <div className="icon-box">
                    <img src={data.icon} alt="" />
                  </div>
                  <h4>{data.title}</h4>
                  <div className="text">{data.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Whyus;
