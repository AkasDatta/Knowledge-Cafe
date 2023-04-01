import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="card container mb-5" id='blog'>
                <div className="card-header text-success fw-bold">
                    Blogs
                </div>
                <div className="card-body">
                    <h5>1: Difference Between Props and States</h5>
                    <p>Ans: Props are inputs to a component that are passed down from its parent component. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child. <br /> On the other hand, "state" refers to data that is managed internally within a component.  The difference comes in which component the data are owned. The state is owned locally, and the component itself updates it.</p>

                    <h5>2: How does useState work?</h5>
                    <p>Ans: useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. It can be used like this: <br />
                    <b>const [state, setState] = useState(initialValue);</b>
                    </p>

                    <h5>3: What else does UseEffect do besides loading or fetching data?</h5>
                    <p>Ans: UseEffects do a lot more than just loading data. It is described below: <br />
                    1. live filtering <br />
                    2. validating input field <br />
                    3. trigger animation on new array value <br />
                    4. update paragraph list on fetched API data update <br />
                    5. updating fetched API data to get BTC updated price
                    </p>
                    
                    <h5>4: How does React work?</h5>
                    <p>Ans: React is a JavaScript library that helps you create user interfaces. <br />
                    Generally, React works by dividing your application into a hierarchical list of components and state. Each component renders a separate part or part, which is done through a lifecycle function. A component is controlled through its state and props, and when the state or props change, React automatically renders the component and technically updates the interface. Overall, React takes care of updating the user interface efficiently and provides you with tools to manage state, props, and lifecycle methods.
                     </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;