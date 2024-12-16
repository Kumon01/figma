import React from 'react';
import '../styles/App.css';
import ProductDetails from '../Components/Detail';
import Carousel from '../Components/Slider';
import Footer from '../Components/Footer';

const Detailliberte = () => {
  return (
    <div>
      <Carousel
        foto1="liberte.jpg"
        foto2="liberte1.jpg"
        foto3="liberte2.jpg"
        foto4="liberte3.jpg"
      />
      <ProductDetails 
        namaproduk="CATALYST LIBERTE V3 FGAnodized Silver Peach"
        harga="Rp539.000"
        deskripsi="Catalyst Liberte V3 FG adalah sepatu kategori sepak bola yang merupakan versi terbaru dari 
        Catalyst. Sepatu ini memiliki fitur-fitur teknologi yang mengesankan. Pada bagian upper, terdapat teknologi
        Quick Fit, Ortknit, dan Ortstrap untuk memberikan kenyamanan dan kestabilan maksimal saat bermain. Midsole
        sepatu menggunakan teknologi Ortshox yang memberikan perlindungan dan responsifitas saat melakukan gerakan. 
        Sedangkan outsole menggunakan teknologi Orttrex dan Ortspine untuk memberikan traksi yang optimal di berbagai 
        jenis lapangan. Material upper terbuat dari Knitting + PU Nosew + mono mesh, sedangkan material outsole
        menggunakan TPU dengan 2 pilihan warna. Sepatu CATALYST LIBERTE V3 FG ini memiliki performa yang luar biasa dan
        cocok untuk para pemain sepak bola yang ingin unggul di atas lapangan."
      />
      <Footer/>
    </div>
  );
};

export default Detailliberte;
