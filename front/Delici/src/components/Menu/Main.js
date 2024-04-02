import React from 'react'
import Startermenu from '../Allmenus/FirstMenu/Startermenu';
import Bredcom from '../Bredcrumb/Main'
import Specialmenu from '../Allmenus/Menmenu/Specialmenu';
import Listmenu from '../Allmenus/Menmenu/Listmenu';
import Secreservation from '../Allmenus/Menmenu/Secreservation';
import Reservation from '../Allmenus/FirstMenu/Reservation';
import Img from '../../assets/images/background/banner-image-2.jpg'

function Main() {
  return (
    <>
      <Bredcom subtitle="Our Menu" title="DELICIOUS & AMAZING" Img={Img} />
      
      <Specialmenu />
      <Listmenu />
      <Startermenu />
      <Secreservation />
      <Reservation />
    </>
  )
}

export default Main