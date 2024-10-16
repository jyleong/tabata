'use client';

import React, { useState, useRef } from 'react';
import { TimeRenderProps } from '../types/props';

const TimeRender = ({ remainingTime }: TimeRenderProps) => {
    const currentTime = useRef(remainingTime);
    const prevTime = useRef<number | null>(null);

    const isNewTimeFirstTick = useRef(false);
    const [, setOneLastRerender] = useState(0);

    if (currentTime.current !== remainingTime) {
        isNewTimeFirstTick.current = true;
        prevTime.current = currentTime.current;
        currentTime.current = remainingTime;
    } else {
        isNewTimeFirstTick.current = false;
    }

    // force one last re-render when the time is over to tirgger the last animation
    if (remainingTime === 0) {
        setTimeout(() => {
        setOneLastRerender((val: number) => val + 1);
        }, 20);
    }

    const isTimeUp = isNewTimeFirstTick.current;

    return (
        <div className="time-wrapper">
        <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
            {remainingTime}
        </div>
        {prevTime.current !== null && (
            <div
            key={prevTime.current}
            className={`time ${!isTimeUp ? "down" : ""}`}
            >
            {prevTime.current}
            </div>
        )}
        </div>
    );
};

  export default TimeRender;