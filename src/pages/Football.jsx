import React from 'react'
import Header from '../Components/Header';
import Product from '../Components/Product'
import '../styles/App.css'
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Football = () => {
  return (
    <div className="App">
            <Header />
            <main className="content">
                <Product
                    title="CATALYST LIBERTE V3 FGAnodized Silver Peach"
                    price="Rp539.000"
                    availability="Tersedia"
                    image="liberte.jpg"
                    
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