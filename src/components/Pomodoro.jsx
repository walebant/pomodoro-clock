import React, { useState } from "react";
import BreakLength from './BreakLenght'
import SessionLength from './SessionLenght'
import Timer from './Timer'

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

    const running = (bool) => setIsRunning(bool)

    return (
        <div className="container">
            <Timer minutes={minutes} 
                setSessionInterval={setSessionInterval}
                setBreakInterval={setBreakInterval}
                sessionInterval={sessionInterval} 
                decreaseMinutes={decreaseMinutes}
                toggleInterval={toggleInterval}
                running={running}
                setIsSession={setIsSession} 
                setMinutes={setMinutes}
                isRunning={isRunning}
                isSession={isSession}
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
            
            <footer>
                Design & Built by <a target="_blank" rel="noopener noreferrer" href="https://walebant.tech">walebant</a>
            </footer>
        </div>
    )
}

export default Pomodoro;
