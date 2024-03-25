import React from 'react'
import Reservation from '../Allmenus/FirstMenu/Reservation'
import Bredcrumb from '../Bredcrumb/Main'
import Img from '../../assets/images/background/menu2.png'
import Menusection from '../Menhome/Menusection'


function Menufour() {
  return (

    <>
      <Bredcrumb subtitle="Whole pack" title="AMAZING AND HEALTHY" Img={Img} />
      <Menusection/>
      <Reservation />
    </>

  )
}

export default Menufour