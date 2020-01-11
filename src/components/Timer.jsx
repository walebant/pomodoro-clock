import { Button } from "@chakra-ui/core";
import React, { Component } from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/core";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/core";

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0,
            intervalId: ''
        }
    }
    
    decrementTimer() {
        switch(this.state.seconds) {
            case 0:
                if(this.props.minutes === 0 ) {
                    if(this.props.isSession) {
                        this.props.setIsSession(false)
                        this.props.toggleInterval()
                    } else{
                        this.props.setIsSession(true)
                        this.props.toggleInterval()
                    }
                }
                this.props.decreaseMinutes()
                this.setState({
                    seconds: 60
                })
                break;
            default:
                this.setState((prev) => { return {seconds: prev.seconds - 1}})
                break;
        }
    }

    reset = () => {
        clearInterval(this.state.intervalId)
        this.props.setMinutes(25)
        this.setState({seconds: 0})
        this.props.setBreakInterval(5)
        this.props.setSessionInterval(25)
        this.props.setIsRunning(false)
    } 
    
    start = () => {
        this.props.setIsRunning(true)
        const intervalId = setInterval(() => this.decrementTimer(), 1000);
        this.setState({
            intervalId: intervalId
        })
    }

    render() {
        const showMin = this.props.minutes < 10 ? `0${this.props.minutes}` : this.props.minutes;
        const showSec = this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds;
        const timer = `${showMin}:${showSec}`;
        
        return (
            <div className="container">
            <CircularProgress 
                value={this.props.minutes}
                max={this.props.sessionInterval}
                size="250px"
                min={0} 
                thickness={0.1}
                color={this.props.minutes < this.props.sessionInterval/5 ? "orange" : "green"}
                capIsRound={true}
                trackColor={this.props.minutes < this.props.sessionInterval/5 ? "orange" : "gray"} >
                <CircularProgressLabel id="time-left">
                    {showMin}:{showSec}
                </CircularProgressLabel>
                <CircularProgressLabel id="timer-label">
                    {this.props.isSession ?
                        (
                            <Editable defaultValue="Session">
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                        )
                        : 'Break'}
                    </CircularProgressLabel>
            </CircularProgress>

            <div className="start_stop_reset">
                <Button variantColor={this.props.isRunning ? "orange" : "green"} id="start_stop" onClick={this.start}>Start/Stop</Button>
                <Button variantColor={this.props.isRunning ? "orange" : "green"} id="reset" onClick={this.reset}>Reset</Button>
            </div>
        </div>
        )
    }
}

export default Timer;
