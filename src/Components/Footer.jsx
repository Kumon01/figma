import React from 'react';
import '../styles/App.css'; 
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>FOLLOW US:</h3>
        <div className="footer-media">
          <a href="https://www.youtube.com/channel/UCdligcaImLLjXXLspo1vyuw" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/ortuseight/" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/ortuseight" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://web.facebook.com/ortuseight/?_rdc=1&_rdr" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>
      </div>

      <div className="footer-center">
        <div className="footer-contact">
          <i className="footer-icon"><FaMapMarkerAlt /></i>
          <p>
            <span>Indonesia</span>
            Jawa Barat, Bandung
          </p>
        </div>

        <div className="footer-contact">
          <i className="footer-icon"><FaPhone /></i>
          <p>+62 895 3611 *****</p>
        </div>

        <div className="footer-contact">
          <i className="footer-icon"><FaEnvelope /></i>
          <p>
            <a href="mailto:ortuseight@gmail.com">ortuseight@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-about">
          <span>About</span>
          Kami di Ortuseight selalu berkomitmen untuk memberikan desain terbaik dengan teknologi terkini serta inovasi-inovasi di setiap produk Ortuseight. 
          Kami siap menjadi bagian dari langkahmu mengejar mimpi, setia menemanimu berlatih, berkompetisi, serta berprestasi di lapangan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
