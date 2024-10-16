'use client'
import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import CountdownTimer from '@components/CountdownTimer';
import { WorkoutState } from '../../types/props';

function useGetAllSearchParams() {
    const searchParams = useSearchParams();
    const params: { [anyProp: string]: string } = {};
  
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
  
    return params;
  };
const Timer = () => {
    const params = useGetAllSearchParams();
    console.log("In Timer: ", params);
    // take in the props being sent from submit
    // it will have to be a timer progress animation that executes
    // the timer for X seconds for working set
    // Y seconds for a rest set
    // There will be W seconds rest between sets
    // and done Z rounds
    // after it is all done
    return (
        <CountdownTimer
            duration={parseInt(params.prepareTime)}
            workoutState={WorkoutState.PREPARE}
        />
    )
};

export default Timer;