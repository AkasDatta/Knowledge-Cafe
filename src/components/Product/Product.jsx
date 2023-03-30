import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {id, name, title, date, hashtag, coverImg, profileImg, timing } = props.product;
    return (
        <div className='product'>
            <img src={coverImg} alt="" />
            <div className="productRead">
                <div className="product-name-sizing">
                    <img src={profileImg} alt="" />
                    <div>
                        <h5>{name}</h5>
                        <p className='date'>{date}</p>
                    </div>
                </div>
                <div>
                    <p className='timing'>{timing} min read </p>
                </div>
            </div>
            <h1>{title}</h1>
            <p>{hashtag}</p>
            <a href="">Mark as read</a>
        </div>
    );
};

export default Product;