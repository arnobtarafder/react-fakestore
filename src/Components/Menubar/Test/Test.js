import React, { useEffect, useState } from 'react';

const Test = (props) => {
    // const {count, you} = props;

    const [count, setCount] = useState(0);
    // useEffect(()=>{useState}, [])
    // const plus = () => setCount(count+1) 
    const plus = () => {
        const oldCount = count;
        const newCount = oldCount + 1;
        setCount(newCount)
    }
    // const minus = () => setCount(count-1) 

    return (
        <div>
            <div className="count mt-3">
                <h1>{count}</h1>
                <button onClick={plus} className="ms-3 p-3">+</button>
                <button onClick={() => setCount(count-1)} className="ms-3 p-3">-</button>
            </div>  
        </div>
    );
};

export default Test;