import React, { Component } from "react";
import { AiOutlinePause } from 'react-icons/ai'
import { TiMediaPlayOutline } from 'react-icons/ti'
import { CircularProgress, CircularProgressLabel, Tooltip, IconButton } from "@chakra-ui/core";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/core";

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0,
            intervalId: ''
        }
    }
    
    countDown() {
        switch(this.state.seconds) {
            case 0:
                if(this.props.minutes === 0 ) {
                    document.querySelector('#beep').play()
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
                    seconds: 59
                })
                break;
            default:
                this.setState((prev) => { return {seconds: prev.seconds - 1}})
                break;
        }
    }

    reset = () => {
        clearInterval(this.state.intervalId)
        document.querySelector('#beep').pause()
        document.querySelector('#beep').currentTime = 0
        this.props.running(false)
        this.props.setMinutes(25)
        this.props.setIsSession(true)
        this.setState({seconds: 0})
        this.props.setBreakInterval(5)
        this.props.setSessionInterval(25)
    } 
    
    start = () => {
        if(this.props.isRunning) {
            clearInterval(this.state.intervalId)
            this.props.running(false)
        } else {
            this.props.running(true)
            const intervalId = setInterval(() => this.countDown(), 1000);
            this.setState({
                intervalId: intervalId
            })
            this.props.isRunning && clearInterval(this.state.intervalId)
        }
    }

    render() {
        const showMin = this.props.minutes < 10 ? `0${this.props.minutes}` : this.props.minutes;
        const showSec = this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds;
        
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
                            <Tooltip label="Edit session title" placement="bottom">
                            <Editable defaultValue="Session">
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                            </Tooltip>
                        )
                        : 'Break'}
                    </CircularProgressLabel>
            </CircularProgress>
            <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" />
            <div className="start_stop_reset">
                <IconButton as={this.props.isRunning ? AiOutlinePause : TiMediaPlayOutline} aria-label="play/pause timer" variantColor={this.props.isRunning ? "orange" : "green"} id="start_stop" onClick={this.start} />
                <Tooltip label="Reset" placement="right">
                    <IconButton aria-label="reset timer" icon="repeat" variantColor={this.props.isRunning ? "orange" : "green"} id="reset" onClick={this.reset} />
                </Tooltip>
                {/* comment out 100 - 103 and uncomment 105 - 106 to pass test suite */}
                {/* <Button variantColor={this.props.isRunning ? "orange" : "green"} id="start_stop" onClick={this.start}>Start/Pause</Button>
                <Button variantColor={this.props.isRunning ? "orange" : "green"} id="reset" onClick={this.reset}>Reset</Button> */}
            </div>
        </div>
        )
    }
}

export default Timer;
