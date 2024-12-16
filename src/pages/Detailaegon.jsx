import React from 'react';
import '../styles/App.css';
import ProductDetails from '../Components/Detail';
import Carousel from '../Components/Slider';
import Footer from '../Components/Footer';

const Detailaegon = () => {
  return (
    <div>
      <Carousel
        foto1="football2.jpg"
        foto2="aegon.jpg"
        foto3="aegon1.jpg"
        foto="aegon2.jpg"
      />
      <ProductDetails 
        namaproduk="FORTE AEGON SE FG WHITE ORTED"
        harga="Rp849.000"
        deskripsi="Ortuseight Forte Aegon IN SE ini adalah salah satu solusi yang mendukung kalian saat bermain dilapangan.
        Seri Khusus Kemerdekaan kali ini terinspirasi dari kulit komodo yang memiliki bintik menyerupai Baju Zirah. Selain 
        itu, Terknologi terbaru pada Upper Forte Aegon ini dapat memudahkan dalam mengontrol bola di lapangan "
      />
      <Footer/>
    </div>
  );
};

export default Detailaegon;
