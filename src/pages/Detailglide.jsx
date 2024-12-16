import React from 'react';
import '../styles/App.css';
import ProductDetails from '../Components/Detail';
import Carousel from '../Components/Slider';
import Footer from '../Components/Footer';

const Detailglide = () => {
  return (
    <div>
      <Carousel
        foto1="runing1.jpg"
        foto2="glide.jpg"
        foto3="glide1.jpg"
        foto4="glide2.jpg"
      />
      <ProductDetails 
        namaproduk="HYPERGLIDE 2.0 SE GREAT WAVE"
        harga="Rp699.000"
        deskripsi="Untuk memenuhi kebutuhan olahraga lari Ortuseight Hyperglide SE 2.0 Fokus hingga titik 
        finish bersama sepatu running Ortuseight Hyperglide SE 2.0 .Sepatu ini hadir dengan teknologi yang 
        membuatnya sangat nyaman saat dikenakan karena material upper yang tipis, bobot yang ringan, dan memberikan
        kesan sejuk. Teknologi Quick Fit, Ortflow, Cumulus Foam, dan Ortsoax masih menjadi teknologi juara 
        yang mendukung sepatu ini. Memiliki material Sandwich, PU Nosew, Compression Phylon, dan Rubber menajdikan 
        sepatu ini teman setia dalam setiap langkahmu"
      />
      <Footer/>
    </div>
  );
};

export default Detailglide;
