import React from 'react'
import { Text } from "@chakra-ui/core";
import { IconButton } from "@chakra-ui/core";

const BreakLength = ({ breakInterval, isRunning, decrementBreak, incrementBreak }) => {
    const decrement = () => {
        if(breakInterval === 1) {return}
        decrementBreak()
    }
    
    const increment = () => {
        if(breakInterval === 60) {return}
        incrementBreak()
    }

    return (
        <section className='lenght-container'>
            <Text id="break-label" fontSize="sm">Break Length</Text>
            <IconButton aria-label="increase break length" icon="minus" disabled={isRunning && true} id="break-decrement" onClick={decrement} />
                <span className='length' style={{color: breakInterval === 60 && "orange"}} id="break-length">{breakInterval}</span>
            <IconButton aria-label="decrease break length" icon="add" disabled={isRunning && true} id="break-increment" onClick={increment} />
        </section>
    )
}

export default BreakLength;