import React from 'react';

const Actions = ({start, reset}) => {
    return (
        <div className="others">
            <button id="start_stop" onClick={start}>start/stop</button>
            <button id="reset" onClick={reset}>reset</button>
        </div>
    );
}

export default Actions;
