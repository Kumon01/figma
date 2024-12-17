import React from 'react';
import '../styles/App.css';
import ProductDetails from '../Components/Detail';
import Carousel from '../Components/Slider';
import Footer from '../Components/Footer';

const Detailascend = () => {
  return (
    <div>
      <Carousel
        foto1="ascend.jpg"
        foto2="ascend1.jpg"
        foto3="ascend2.jpg"
        foto4="ascend3.jpg"
      />
      <ProductDetails 
        namaproduk="ORTUS FUTSAL Jogosala Ascend-Black"
        harga="Rp499.000"
        deskripsi="Jogosala Ascend, sepatu futsal terbaru yang diciptakan oleh Ortuseight, 
        meluncurkan inovasi terkini pada musim panas tahun 2024. Desainnya menggabungkan beberapa teknologi 
        unggulan untuk memberikan performa maksimal. Dilengkapi dengan teknologi Quick Fit pada bagian atas yang 
        memberikan kenyamanan dan kelincahan saat bermain. Tidak hanya itu, teknologi Midsole yang menggunakan Cumulus Foam dan Ortshox memberikan 
        dukungan dan responsivitas yang luar biasa saat berlari atau mengontrol bola. 
        Untuk meningkatkan traksi dan stabilitas, sepatu ini juga dilengkapi dengan teknologi Outsole OrtCurve. Material 
        Upper yang terbuat dari kombinasi Splite Suede Leather dan Sandwich Mesh memberikan kombinasi yang sempurna antara ketangguhan dan sirkulasi 
        udara yang baik. Material Midsole menggunakan Injection Phylon yang 
        memberikan bantalan empuk dan responsif. Sedangkan untuk Outsole-nya, menggunakan bahan karet yang memberikan daya cengkeram yang optimal di permukaan lapangan."
      />
      <Footer/>
    </div>
  );
};

export default Detailascend;
