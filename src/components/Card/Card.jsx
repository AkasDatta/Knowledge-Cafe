import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
            <div className="banner-container row-md-12">
                <div className='products-container col-md-8'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product = {product}
                        ></Product>)
                    }
                </div>
                <div className='cart-container col-md-4'>
                    <button>Spent time on road:{} min</button>
                    <div className='bookmark'>
                        <h2>Bookmarked Blogs: </h2>
                        <div className='bookmark-title'>
                            <p>master Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequuntur neque esse non</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;