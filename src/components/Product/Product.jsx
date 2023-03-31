import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
// import { ToastContainer, toast } from 'react-toastify';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    const {id, name, title, date, hashtag, coverImg, profileImg, timing } = props.product;
    const handleAddCard = props.handleAddCard;
    //  
    const handleAddToStory = props.handleAddToStory;


    //
    // const handleAlart = () =>{
    //     toast("Wow so easy!");
    // }

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