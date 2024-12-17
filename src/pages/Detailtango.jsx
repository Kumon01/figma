import React from 'react';
import '../styles/App.css';
import ProductDetails from '../Components/Detail';
import Carousel from '../Components/Slider';
import Footer from '../Components/Footer';

const Detailtango = () => {
  return (
    <div>
      <Carousel
        foto1="tango1.jpg"
        foto2="tango2.jpg"
        foto3="tango3.jpg"
      />
      <ProductDetails 
        namaproduk="JOGOSALA X TANGO VANILLA DELIGHT"
        harga="Rp500.000"
        deskripsi="Jogosala X Tango, sebuah karya kolaborasi dengan brand snack Tango
        yang telah lama dalam industri makanan ringan, kini melahirkan sebuah karya sepatu lokal buatan anak 
        bangsa, dengan silo jogosala yang cukup sudah terkenal di kalangan pecinta futsal."
      />
      <Footer/>
    </div>
  );
};

export default Detailtango;
