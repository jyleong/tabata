'use client';
import React, { useState} from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { CountdownTimerProps, WorkoutState } from '../types/props';
import TimeRender from '@components/TimeRender';

const stateToColor = {
    [WorkoutState.PREPARE]: '007BFF', // blue
    [WorkoutState.WORKSET]: '34C759', // green
    [WorkoutState.REST]: 'FF3B3F', // red
    [WorkoutState.REST_BETWEEN_SETS]: 'FF3B3F', // red
  };

const CountdownTimer = ({ duration, workoutState, onComplete }: CountdownTimerProps) => {
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
                    colors={`#${stateToColor[workoutState]}`}
                >
                    {(remainingTime) => (
                        <TimeRender
                            remainingTime={remainingTime.remainingTime}
                            onComplete={onComplete}
                        />
                    )}
                </CountdownCircleTimer>
                <button 
                    className="button-circle .button-circle-z py-4 px-4 rounded mt-6"
                    onClick={handlePlayPause}
                >
                    {isPlaying ? "Pause" : "Play"}
                </button>
            </div>
        </div>
    );
};

export default CountdownTimer;