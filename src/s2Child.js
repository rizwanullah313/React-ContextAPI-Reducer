import React, { useReducer } from 'react'
import counterReducer from './CounterReducer'

 const Childd = () => {
     let [state, dispatch] = useReducer(counterReducer,0);
     console.log(state);
    return (
        <div>
            <h2>Reducer</h2>
            <h4>Counter Value is: {state}</h4>
            <button type="submit" onClick={()=>dispatch('INCREMENT')}>Increment</button>
            <button type="submit" onClick={()=>dispatch('DECREMENT')}>Increment</button>
        </div>
    )
}

export default Childd;