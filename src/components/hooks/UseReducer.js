import React, { useReducer } from 'react';
import './style.css';


const reducer = (state, action) => {
    if(action.type === 'INCR') {
        state = state + 1
    } 
    if (state > 0 && action.type === 'DECR') {
        state = state - 1;
    }

    return state;
    
}

const UseReducer = () => {
    // const [data, setData] = useState(0);

    const intialData = 0;
    const [state, dispatch] = useReducer(reducer, intialData)


    return (
        <div className='div-center' >
            <div className='div-value' >
            <h2>{state}</h2>
            </div>
            <div className='btn-div' >
                <button onClick={() => dispatch({ type: "INCR" }) }>Increment</button>
                <button onClick={() => dispatch({ type: "DECR" }) }>decrement</button>
            </div>
        </div>
    )
}

export default UseReducer;
