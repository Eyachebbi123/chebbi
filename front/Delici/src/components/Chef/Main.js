import React from 'react'
import Chefsection from '../Menchefs/Chefsection'
import Quotesection from '../Menchefs/Quotesection'
import Teem from '../Menhome/Teem'
import Bredcrumb from '../Bredcrumb/Main'
import Img from '../../assets/images/background/banner-image-5.jpg'

function Main() {
  return (

    <>
      <Bredcrumb subtitle="Meet Our Chef" title="OUR TEAM" Img={Img} />
      <Chefsection />
      <Quotesection />
      <Teem />
    </>

  )
}

export default Main