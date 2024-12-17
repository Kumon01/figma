import React from 'react';
import Header from '../Components/Header';
import Product from '../Components/Product'
import '../styles/App.css'
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Futsal = () => {
    return (
        <div className="App">
            <Header />
            <main className="content">
                <Link to="/detailbbs" className="link">
                <Product 
                    title="ORTUS FUTSAL JogosalaXBBS"
                    price="Rp675.000"
                    availability="Tersedia"
                    image="bbs.jpg" 
                /></Link>
                <Link to="/detailtango" className="link">
                <Product
                    title="ORTUS FUTSAL JogosalaXTango"
                    price="Rp500.000"
                    availability="Tersedia"
                    image="tango.jpg"  
                /></Link>
                <Link to="/detailascend" className="link">
                <Product
                    title="ORTUS FUTSAL Jogosala Ascend-Black"
                    price="Rp499.000"
                    availability="Tersedia"
                    image="ascend.jpg"   
                /></Link>
                <Link to="/detailstrive" className="link">
                <Product
                    title="JOGOSALA STRIVE Beige Navy"
                    price="Rp399.000"
                    availability="Tersedia"
                    image="strive.jpg"  
                /></Link>
            </main>
        
        <div className='mt-4'>
        <Footer/></div>
        </div>
    );
};

export default Futsal;