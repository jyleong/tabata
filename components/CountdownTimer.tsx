'use client';
import React, { useState} from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { CountdownTimerProps } from '../types/props';
import TimeRender from '@components/TimeRender';


const CountdownTimer = ({ duration, workoutState }: CountdownTimerProps) => {
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center mb-4">
                {workoutState}
            </h1>
            <div className="timer-wrapper">
                <CountdownCircleTimer
                    isPlaying={isPlaying}
                    duration={duration}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[10, 6, 3, 0]}
                >
                    {(remainingTime) => (
                        <TimeRender
                            remainingTime={remainingTime.remainingTime}
                        />
                    )}
                </CountdownCircleTimer>
            </div>
            <button 
                className="button-circle py-2 px-4 rounded mt-4"
                onClick={handlePlayPause}
            >
                {isPlaying ? "Pause" : "Play"}
            </button>
    </div>
    );
};

export default CountdownTimer;