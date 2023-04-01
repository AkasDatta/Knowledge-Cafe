import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Product.css';


const Product = (props) => {
    // console.log(props.product);
    const {id, name, title, date, hashtag, coverImg, profileImg, timing } = props.product;
    const handleAddCard = props.handleAddCard;
    //  
    const handleAddToStory = props.handleAddToStory;
    //
   
    return (
        <div className='product'>
            <div>
                 <img className='banner-img rounded img-fluid' src={coverImg} alt="" />
            </div>
            <div className="productRead">
                <div className="product-name-sizing">
                    <img src={profileImg} alt="" />
                    <div>
                        <h5>{name}</h5>
                        <p className='date'>{date}</p>
                    </div>
                </div>
                <div>
                    <p className='timing'>
                        {timing} min read 
                        <FontAwesomeIcon className='icon'
                        onClick={() => handleAddCard(props.product)} icon={faBookmark} />
                    </p>
                </div>
            </div>
            <h1 className='mt-4'>{title}</h1>
            <p>{hashtag}</p>

            <div className='read'>
                <p onClick={() => handleAddToStory(props.product)}><u>Mark as read</u></p> 
            </div>
        </div>
        
    );
};

export default Product;