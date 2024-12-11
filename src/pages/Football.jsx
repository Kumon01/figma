import React from 'react'
import Header from '../Components/Header';
import Product from '../Components/Product'
import '../styles/App.css'
import Footer from '../Components/Footer';

const Football = () => {
  return (
    <div className="App">
            <Header />
            <main className="content">
                <Product
                    title="FORTE XCALIBUR FG - MAGENTA CYAN BLACK"
                    price="Rp499.000"
                    availability="Tidak Tersedia"
                    image="football1.jpg"
                  
                />
                <Product
                    title="MAGNUS GK GLOVE VORTEX PINK BLACK"
                    price="Rp499.000"
                    availability="Tersedia"
                    image="football.jpg"
                     
                />
                <Product
                    title="FORTE AEGON SE FG WHITE ORTED"
                    price=">Rp849.000"
                    availability="Tersedia"
                    image="football2.jpg"
                     
                />
            </main>
            <div className='mt-4'>
            <Footer/></div>
        </div>
  )
}
export default Football