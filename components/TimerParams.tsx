'use client';

import React, { useState }from 'react';
import { useSearchParams } from 'next/navigation';

import CountdownTimer from '@components/CountdownTimer';
import { WorkoutState } from '../types/props';

function useGetAllSearchParams() {
    const searchParams = useSearchParams();
    const params: { [anyProp: string]: string } = {};
  
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
  
    return params;
};

const TimerParams = () => {
    const params = useGetAllSearchParams();
    const numSets = parseInt(params.sets);
    const numCycles = parseInt(params.cycles);
    const prepareTime: number = parseInt(params.prepareTime);
    const workoutSetTime: number = parseInt(params.workTime);
    const restTime: number = parseInt(params.restTime);
    const restBetweenSets: number = parseInt(params.restBetweenSets);

    const timerConfigurations = [
        { label: 'Prepare', duration: prepareTime, state: WorkoutState.PREPARE },
      ];
      
      for (let set = 0; set < numSets; set++) {
        for (let cycle = 0; cycle < numCycles; cycle++) {
          timerConfigurations.push({
            label: `Set ${set + 1} - Cycle ${cycle + 1}`,
            duration: workoutSetTime,
            state: WorkoutState.WORKSET,
          });
          timerConfigurations.push({
            label: 'Rest',
            duration: restTime,
            state: WorkoutState.REST,
          });
        }
        if (set < numSets - 1) {
          timerConfigurations.push({
            label: 'Rest between sets',
            duration: restBetweenSets,
            state: WorkoutState.REST_BETWEEN_SETS
          });
        }
      }
      
    const [currentTimerIndex, setCurrentTimerIndex] = useState(0);
    
    const handleTimerComplete = () => { setCurrentTimerIndex(currentTimerIndex + 1) };
    return (
        <div>
    {currentTimerIndex < timerConfigurations.length ? (
      <CountdownTimer
        key={currentTimerIndex}
        label={timerConfigurations[currentTimerIndex].label}
        duration={timerConfigurations[currentTimerIndex].duration}
        workoutState={timerConfigurations[currentTimerIndex].state}
        onComplete={handleTimerComplete}
      />
    ) : (
      <div>Timers complete!</div>
    )}
  </div>
    )
};

export default TimerParams;
