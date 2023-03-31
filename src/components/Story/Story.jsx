import React from 'react';
import './Story.css';

const Story = ({story}) => {
    console.log(story);

    let total = 0;
    for(const product of story){
        total = total + product.timing;
    }

    return (
        <div>
              <button>Spent time on road: {total} min</button>
        </div>
    );
};

export default Story;