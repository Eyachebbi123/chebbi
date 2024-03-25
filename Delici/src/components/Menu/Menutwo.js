import React from 'react'
import Reservation from '../Allmenus/FirstMenu/Reservation';
import Specialmenu from '../Allmenus/Menmenu/Specialmenu';
import Bredcrumb from '../Bredcrumb/Main'
import Img from '../../assets/images/background/salad.png'

function Menutwo() {
  return (
    <>
      <Bredcrumb subtitle="Salads" title="CHOOSE UR OWN SALAD !" Img={Img} />
      <Specialmenu />
      <Reservation />
    </>
  )
}

export default Menutwo