import React from 'react';
import Header from '../Components/Header';
import Product from '../Components/Product'
import '../styles/App.css'

const Futsal = () => {
    return (
        <div className="App">
            <Header />
            <main className="content">
                <Product
                    title="ORTUS FUTSAL JogosalaXBBS"
                    price="Rp675.000"
                    availability="Tidak Tersedia"
                    image="bbs.jpg"
                    linkTo="/detail/Detailtango"
                    
                />
                <Product
                    title="ORTUS FUTSAL JogosalaXTango"
                    price="Rp500.000"
                    availability="Tersedia"
                    image="tango.jpg"
                    linkTo="/detail/Detailtango"
                    
                />
                <Product
                    title="ORTUS FUTSAL JOGOSALA VANQUISH"
                    price="Rp499.000"
                    availability="Tersedia"
                    image="jogo.jpg"
                    linkTo="/detail/Detailtango"
                />
            </main>
        </div>
    );
};

export default Futsal;