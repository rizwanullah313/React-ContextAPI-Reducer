import React from 'react'
import { Child } from './Child'

export const Parent = (props) => {
    return (
        <div>
            <Child name={props.name} />
        </div>
    )
}
