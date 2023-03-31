import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Card.css'
import Title from '../Title/Title';
import Story from '../Story/Story';
const Card = () => {
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState([]);
    const [story, setStory] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    
    const handleAddCard = (product) =>{
        const newTitle = [...title, product];
        setTitle(newTitle);
    }

    //
    const handleAddToStory = (product) =>{
        const newStory = [...story, product];
        setStory(newStory);
    }

    return (
        <div className='card-container'>
            <hr />
            <div className="banner-container">
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product = {product}
                            handleAddCard = {handleAddCard}
                            handleAddToStory = 
                            {handleAddToStory}
                        ></Product>)
                    }
                </div>
                <div className='cart-container'>
                  <Story story={story}></Story>
                    <div className='bookmark'>
                        <Title title={title}></Title>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;