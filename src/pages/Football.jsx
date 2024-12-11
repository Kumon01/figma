import React from 'react'
import Header from '../Components/Header';
import Product from '../Components/Product'
import '../styles/App.css'

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
                     linkTo="/detail"
                />
                <Product
                    title="MAGNUS GK GLOVE VORTEX PINK BLACK"
                    price="Rp499.000"
                    availability="Tersedia"
                    image="football.jpg"
                     linkTo="/detail"
                />
                <Product
                    title="FORTE AEGON SE FG WHITE ORTED"
                    price=">Rp849.000"
                    availability="Tersedia"
                    image="football2.jpg"
                     linkTo="/detail"
                />
            </main>
        </div>
  )
}
export default Football