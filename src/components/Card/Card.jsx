import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Card.css'
import Title from '../Title/Title';
import Story from '../Story/Story';
import { ToastContainer, toast } from 'react-toastify';

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
        const exists = title.find(marked => marked.id === product.id);
        if(exists){
            toast("Already Bookmarked!");
            return;
        }
        const newTitle = [...title, product];
        setTitle(newTitle);
    }
    
    const handleAddToStory = (product) =>{
        const newStory = [...story, product];
        setStory(newStory);
    }

    return (
        <div className='card-container container'>
            <hr />
            <div className="banner-container row row-cols-1 row-cols-md-2">
                <div className='products-container col-md-8'>
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
                <div className='cart-container col-md-4'>
                    <div>
                        <Story story={story}></Story>
                    </div>
                  
                    <div className='bookmark'>
                        <Title title={title}></Title>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;