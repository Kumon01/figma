import React from 'react';
import '../styles/App.css';
import ProductDetails from '../Components/Detail';
import Carousel from '../Components/Slider';
import Footer from '../Components/Footer';

const Detailstars = () => {
  return (
    <div>
      <Carousel
        foto1="running.jpg"
        foto2="stars.jpg"
        foto3="stars1.jpg"
        foto4="stars2.jpg"
      />
      <ProductDetails 
        namaproduk="FRISBEE STAR AND STRIPES"
        harga="Rp749.000"
        deskripsi="Walking shoes ini terinspirasi dari pemimpin Avengers, Captain America, prajurit super
        yang dilengkapi dengan baju besi vibranium yang hampir tak terhancurkan. Disebut Shield"
      />
      <Footer/>
    </div>
  );
};

export default Detailstars;
