import React, {useContext} from 'react'
import counterContext from './CounterContext'

export const Schild = () => {

     let counterValue = useContext(counterContext);
         console.log(counterValue);
        
    return (
        
        <div>
            This is a Second Child
            <h1>This is </h1>
        </div>
    )
}
// import React from 'react'

// export const Schild = (props) => {
//     return (
//         <div>
//             This is a Second Child
//             <h1>This is {props.name}</h1>
//         </div>
//     )
// }
