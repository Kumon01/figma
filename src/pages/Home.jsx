import React from 'react'
import Header from '../Components/Header'
import { banner, banner1, banner2, banner3 } from '../assets'


const Home = () => {
  return (
    <div>
      <Header/>
    <div>
      <img src={banner} alt="" />
      <img src={banner1} alt="" />
      <img src={banner2} alt="" />
      <img src={banner3} alt="" />
    </div>
    </div>
  )
}
export default Home