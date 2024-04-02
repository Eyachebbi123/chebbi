import React from 'react'
import Offers from '../Allmenus/FirstMenu/Offers'
import Reservation from '../Allmenus/FirstMenu/Reservation'
import Appetizers from '../Allmenus/Thrdmenu/Appetizers'
import Privateevent from '../Allmenus/Thrdmenu/Privateevent'
import Bredcrumb from '../Bredcrumb/Main'
import Img from '../../assets/images/background/soup.png'

function Menuthree() {
  return (
    <>
      <Bredcrumb subtitle="Soups and grills" title="CHOOSE YOUR GRILLS AND SOUPS!" Img={Img} />
      <Appetizers />
      <Privateevent />
      <Offers />
      <Reservation />
    </>
  )
}

export default Menuthree