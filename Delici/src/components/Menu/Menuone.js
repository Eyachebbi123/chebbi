import React from 'react'
import Startermenu from '../Allmenus/FirstMenu/Startermenu';
import Offer from '../Allmenus/FirstMenu/Offers'
import Reservation from '../Allmenus/FirstMenu/Reservation';
import Bredcom from '../Bredcrumb/Main'
import Img from '../../assets/images/background/fruit.png'

function Menuone() {
  return (
    <>
      <Bredcom subtitle="Fruit" title="SOMETHING SWEET AND HEALTHY" Img={Img} />
      <Startermenu />
      <Offer />
      <Reservation />
    </>
  )
}

export default Menuone