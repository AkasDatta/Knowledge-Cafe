import React from 'react';
import './Title.css'
const Title = ({title}) => {
    // const {title} = props;
    let total = 0;
    for(const product of title){
        total = total + product.id;
    } 

    return (
        <div>
            <h2>Bookmarked Blogs: {title.length}</h2>
            <div className='bookmark-title'>
                {/* <p>{title}</p> */}
            </div>
        </div>
    );
};

export default Title;