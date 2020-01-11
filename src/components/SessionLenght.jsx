import React from 'react'
import { Text } from "@chakra-ui/core";
import { IconButton } from "@chakra-ui/core";

const SessionLength = ({ sessionInterval, isRunning, setMinutes, incrementSession, decrementSession}) => {

    const decrement = () => {
        if(sessionInterval === 1) {return}
        decrementSession()
        setMinutes(prev => prev - 1)
    }
    const increment = () => {
        if(sessionInterval === 60) {return}
        incrementSession()
        setMinutes(prev => prev + 1)
    }

    return (
        <section className='lenght-container'>
            <Text id="session-label" fontSize="sm">Session Length</Text>
            <IconButton aria-label="increase session length" icon="minus" disabled={isRunning && true} id="session-decrement" onClick={decrement} />
                <span className='length' style={{color: sessionInterval === 60 && "orange"}} id="session-length">{sessionInterval}</span>
            <IconButton aria-label="decrease session length" icon="add" disabled={isRunning && true} id="session-increment" onClick={increment} />
        </section>
    )
}

export default SessionLength;