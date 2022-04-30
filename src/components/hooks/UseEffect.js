import React, { useEffect, useState } from 'react';
import './style.css'

const UseEffect = () => {

    const [data, setData] = useState(0);

    useEffect(() => {
       document.title = data
    }, [data])

    return (
        <div className='div-center' >
            <div className='div-value' >
            <h2>{data}</h2>
            </div>
            <div className='btn-div' >
                <button onClick={() => setData(data + 1) }>Increment</button>
                <button onClick={() => data > 0 ? setData(data - 1) : setData(0) }>decrement</button>
            </div>
        </div>
    )
}

export default UseEffect
