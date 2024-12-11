import React from 'react';
import '../styles/App.css';
import ProductDetails from '../Components/Detail';
import Carousel from '../Components/Slider';
import Footer from '../Components/Footer';

const Detailtango = () => {
  return (
    <div>
      <Carousel
        foto1="jogo.jpg"
        foto2="jogo1.jpg"
        foto3="jogo2.jpg"
      />
      <ProductDetails 
        namaproduk="JOGOSALA VANQUISH LIGHT GREEY ULTRA TEAL"
        kode="11020492"
        harga="Rp499.000"
        deskripsi="JOGOSALA VANQUISH, sepatu yang sangat pas untuk kamu yang ingin tampil trendi dengan desain nya yang super stylist. Sepatu ini dibuat menggunakan teknologi Quick Fit dan Ortfoce yang membuat nyaman di kaki dengan bantalan yang empuk. 
				Sepatu ini juga sangat ringan membuat kamu seperti berjalan diatas awan dan anti cedera karena adanya tambahan teknologi Cumulus Foam, Ortshox, dan Ortcurve. Sebagai pelengkap penampilan nya yang menawan sepatu ini buat dengan material
                 Full Grain Leather + splite suede+ sanwich mesh +PU, Inj Phyton, dan Rubber Hardness 55."
      />
      <Footer/>
    </div>
  );
};

export default Detailtango;
