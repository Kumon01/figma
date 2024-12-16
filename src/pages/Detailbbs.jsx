import React from 'react';
import '../styles/App.css';
import ProductDetails from '../Components/Detail';
import Carousel from '../Components/Slider';
import Footer from '../Components/Footer';

const Detailbbs = () => {
  return (
    <div>
      <Carousel
        foto1="bbs.jpg"
        foto2="bbs1.jpg"
        foto3="bbs2.jpg"
        foto4="bbs3.jpg"
      />
      <ProductDetails 
        namaproduk="Sepatu Futsal ORTUS JogosalaXBBS"
        harga="Rp675.000"
        deskripsi="Jogosala Crusher BBS SE 3.0 merupakan kolaborasi ketiga anatara Ortuseight x Bayu Saptaji. Dibuat khusus dalam seri terbatas dengan 
			striking color berkombinasi warna magenta/vortex blue dan hitam, Marka 
			pattern yang nampak pada seluruh permukaan sepatu serta 
			gradasi dengan warna magenta/vortex blue mampu membuat seri ini menjadi pelengkap mood bermain yang berbeda.
			Diambil dari Bahasa Inggris yang artinya “penghancur” sepatu ini dapat pula dimaknai sebagai infused-power 
			bagi para pemakainya agar bersemangat memberikan penampilan dalam strategi dan eksekusi menghancurkan musuh di lapangan dengan style dan mindset 
			yang out-of-the-box atau berani beda serta dilengkapi dengan beragam teknolog."
      />
      <Footer/>
    </div>
  );
};

export default Detailbbs;
