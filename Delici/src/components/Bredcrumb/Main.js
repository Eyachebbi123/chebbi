import React from 'react'

function Main({ subtitle, Img, title }) {
  return (
    <>
      <section className="inner-banner">
        <div className="image-layer img-fluid" style={{ backgroundImage: `url(${Img})` }}></div>
        <div className="auto-container">
          <div className="inner">
            <div className="subtitle"><span> {title} </span></div>

            <div className="pattern-image">

              <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />

            </div>

            <h1><span>{subtitle}</span></h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main