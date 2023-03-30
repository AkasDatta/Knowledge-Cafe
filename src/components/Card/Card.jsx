import React, { useEffect, useState } from 'react';
import './Card.css'
const Card = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='card-container'>
            <hr />
            <div className="banner-container">
                <div className='products-container'>
                    <h2>Total products: {products.length}</h2>
                </div>
                <div className='cart-container'>
                    <button>Spent time on road: min</button>
                </div>
            </div>
        </div>
    );
};

export default Card;