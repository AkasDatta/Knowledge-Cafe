import React from 'react';
import './Title.css'
const Title = ({title}) => {
    let total = 0;
    // let totaltext = [];
    for(const product of title){
        total = total + product.id;
        // totaltext = "" + title;
        // console.log(totaltext)
    } 

    return (
        <div>
            <h2 className='fs-4 text-center'>Bookmarked Blogs: {title.length}</h2>
            <div className='bookmark-title'>
                {/* <p>{totaltext}</p> */}
               
            </div>
        </div>
    );
};

export default Title;