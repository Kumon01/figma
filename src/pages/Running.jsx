import React from 'react'
import Header from '../Components/Header';
import Product from '../Components/Product';
import '../styles/App.css';
import Footer from '../Components/Footer';

const Running = () => {
  return (
    <div className="App">
            <Header />
            <main className="content">
                <Product
                    title="FRISBEE STAR AND STRIPES"
                    price="Rp749.000"
                    availability="tersedia"
                    image="running.jpg"
                    
                />
                <Product
                    title="HYPERGLIDE 2.0 SE GREAT WAVE"
                    price="Rp699.000"
                    availability="tersedia"
                    image="runing1.jpg"
                
                />
            </main>
            <div className='mt-4'>
            <Footer/></div>
        </div>
  )
}

export default Running
