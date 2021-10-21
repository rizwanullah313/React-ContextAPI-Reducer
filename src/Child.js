import React from 'react'
import { Schild } from './Schild'
// import counterContext from './CounterContext';

export const Child = () => {

    // let counterValue = counterContext(counterContext);
    //     console.lo(cougnterValue);
    
    return (
        <div>
            This is a First Child
            <Schild />
        </div>
    )
}

// import React from 'react'
// import { Schild } from './Schild'

// export const Child = (props) => {
//     return (
//         <div>
//             This is a First Child
//             <Schild name={props.name} />
//         </div>
//     )
// }
