import React from 'react';
import '../styles/App.css';
import ProductDetails from '../Components/Detail';
import Carousel from '../Components/Slider';
import Footer from '../Components/Footer';

const Detailstrive = () => {
  return (
    <div>
      <Carousel
        foto1="strive.jpg"
        foto2="strive1.jpg"
        foto3="strive2.jpg"
        foto4="strive3.jpg"
      />
      <ProductDetails 
        namaproduk="JOGOSALA STRIVE Beige Navy"
        harga="Rp399.000"
        deskripsi="JOGOSALA STRIVE adalah sepatu futsal terbaru dari Ortuseight yang dirilis pada musim panas tahun
        2024. Didesain dengan teknologi canggih untuk meningkatkan performa Anda di lapangan. Memiliki fitur Quick
        Fit pada bagian atas untuk kenyamanan maksimal, serta Midsole berupa Cumulus Foam dan Ortshox yang
        memberikan dukungan dan responsivitas saat bermain. Tak hanya itu, sepatu ini juga dilengkapi dengan
        teknologi Outsole OrtCurve untuk stabilitas dan traksi yang optimal. Terbuat dari material Upper PU
        Synthetic dan Sandwhich Mesh, serta Midsole Injection Phylon, serta Outsole berbahan karet."
      />
      <Footer/>
    </div>
  );
};

export default Detailstrive;
