import React from 'react'
import { Schild } from './Schild'

export const Child = (props) => {
    return (
        <div>
            This is a First Child
            <Schild name={props.name} />
        </div>
    )
}
