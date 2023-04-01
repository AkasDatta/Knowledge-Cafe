import React from 'react';
import './Title.css'
const Title = ({title}) => {
    let total = 0;
    for(const product of title){
        total = total + product.id;
    } 

    return (
        <div>
            <h2 className='fs-4 text-center'>Bookmarked Blogs: {title.length}</h2>
            <div className='bookmark-title'>
                {
                    title.map(title => <p key={title.id}>{title.title}</p>)
                }
                
            </div>
        </div>
        
    );
};

export default Title;