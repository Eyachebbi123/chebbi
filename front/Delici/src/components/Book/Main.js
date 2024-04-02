import React from 'react'
import Bredcom from '../Bredcrumb/Main'
import Book from '../../components/Menhome/Book'
import Img from '../../assets/images/background/spark.png'

function Main() {
  return (
    <>
      <Bredcom subtitle="Reservation" title="SUBSCRIBE" Img={Img}/>  
      <Book />
    </>
  )
}

export default Main