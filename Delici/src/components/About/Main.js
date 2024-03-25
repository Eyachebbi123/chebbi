import React from 'react'
import Aboutsec from '../Menabout/Aboutsec'
import Aboutservice from '../Menabout/Aboutservice'
import Aboutwhyus from '../Menabout/Aboutwhyus'
import Sliderabout from '../Menabout/Sliderabout'
import Testimonialsabout from '../Menabout/Testimonialsabout'
import Winningchef from '../Menabout/Winningchef'
import Bredcrumb from '../Bredcrumb/Main'
import Img from '../../assets/images/background/pic1111.png'

function Main() {
  return (
    <>
      <Bredcrumb subtitle="About Us" title="OUR STORY" Img={Img} />
      <Aboutsec />
      <Winningchef />
      <Aboutservice />
      <Testimonialsabout />
      <Aboutwhyus />
      <Sliderabout />
    </>
  )
}
export default Main