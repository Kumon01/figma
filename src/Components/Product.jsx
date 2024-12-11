import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';


const Product = ({ title, price, image, availability }) => {
    return (
        <div className="product">
            <img className="product-image" src={image} alt={title} />
            <div className="product-details">
               
                    <h2 className="product-title">{title}</h2>
                
                <p className="product-price">{price}</p>
                <p className="product-info">{availability}</p>
            </div>
        </div>
    );
};

export default Product;
