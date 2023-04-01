import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    const {id, name, title, date, hashtag, coverImg, profileImg, timing } = props.product;
    const handleAddCard = props.handleAddCard;
    //  
    const handleAddToStory = props.handleAddToStory;
    //////////////////
    //
    const [clicked, setClicked] = useState(false);

    //
    useEffect(() => {
        if (clicked) {
          // Add bookmark
          handleAddCard(props.product);
    
        //   // Show toast alert
        //   toast('Alert!!! You Have Already Bookmarked This Blog');
        }
      }, [clicked]);

      //
    //   const handleAddCard = () => {
    //     // Set clicked state to true on single click
    //     setClicked(true);
    //   };
    
      const handleDoubleClick = () => {
        // Set clicked state to false on double click
        setClicked(false);
        
        // Show toast alert
        toast('Alert!!! You Have Already Bookmarked This Blog');
      };
////////////////////

    // const handleAlert = () =>{
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
                        onClick={() => handleAddCard(props.product)} onDoubleClick={handleDoubleClick} icon={faBookmark} />
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