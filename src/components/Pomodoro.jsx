import React, { useState } from "react";
import BreakLength from './BreakLenght'
import SessionLength from './SessionLenght'
import Timer from './Timer'
import "../App.scss";

const Pomodoro = () => {
    const [minutes, setMinutes] = useState(25)
    const [isSession, setIsSession] = useState(true)
    const [isRunning, setIsRunning] = useState(false)
    const [breakInterval, setBreakInterval] = useState(5)
    const [sessionInterval, setSessionInterval] = useState(25)

    const increment = (element) => element(prev => prev + 1);
    const decrement = (element) => element(prev => prev - 1);
    
    const decreaseMinutes = () => setMinutes(prev => prev - 1)

    const toggleInterval = () => {
        isSession ? setMinutes(sessionInterval) : setMinutes(breakInterval)
    }

    return (
        <div className="container">
            <Timer minutes={minutes} 
                sessionInterval={sessionInterval} 
                setSessionInterval={setSessionInterval}
                decreaseMinutes={decreaseMinutes}
                setMinutes={setMinutes}
                setBreakInterval={setBreakInterval}
                setIsSession={setIsSession} 
                toggleInterval={toggleInterval}
                isSession={isSession}
                isRunning={isRunning}
                setIsRunning={setIsRunning}
             />

            <BreakLength 
                isRunning={isRunning}
                breakInterval={breakInterval} 
                incrementBreak={() => increment(setBreakInterval)} 
                decrementBreak={() => decrement(setBreakInterval)} />

            <SessionLength 
                isRunning={isRunning}
                sessionInterval={sessionInterval}
                incrementSession={() => increment(setSessionInterval)} 
                decrementSession={() => decrement(setSessionInterval)}
                setMinutes={setMinutes} />
        </div>
    )
}

export default Pomodoro;
