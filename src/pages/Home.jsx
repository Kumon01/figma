import React from 'react'
import Header from '../Components/Header'
import { banner, banner1, banner2, banner3 } from '../assets'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <Header/>
    <div>
      <Link to="/detailliberte">
      <img src={banner} alt="" />
      </Link>
      <Link to="/detailstrive">
      <img src={banner1} alt="" />
      </Link>
      <Link to="/detailascend">
      <img src={banner2} alt="" />
      </Link>
      <Link to="/detailstars">
      <img src={banner3} alt="" />
      </Link>
    </div>
    </div>
  )
}
export default Home