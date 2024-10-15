'use client';

import React, { useState }  from 'react';
import SetInput from '@components/SetInput';
// TODO type props

const Circuit = () => {

    const [prepareTime, setPrepareTime] = useState(5);
    const [workTime, setWorkTime] = useState(30);
    const [restTime, setRestTime] = useState(30);
    const [rounds, setRounds] = useState(5);
    const [restBetweenSets, setRestBetweenSets] = useState(30);

    const handlePrepareDecrement = () => {
        setPrepareTime(prepareTime - 1);
    };

    const handlePrepareIncrement = () => {
        setPrepareTime(prepareTime + 1);
    };

    const handleWorkDecrement = () => {
        setWorkTime(workTime - 1);
    };

    const handleWorkIncrement = () => {
        setWorkTime(workTime + 1);
    };

    const handleRestDecrement = () => {
        setRestTime(restTime - 1);
      };
    
    const handleRestIncrement = () => {
        setRestTime(restTime + 1);
    };

    const handleRoundsDecrement = () => {
        setRounds(rounds - 1);
    };

    const handleRoundsIncrement = () => {
        setRounds(rounds + 1);
    };

    const handleRestBetweenSetsDecrement = () => {
        setRestBetweenSets(restBetweenSets - 1);
    };

    const handleRestBetweenSetsIncrement = () => {
        setRestBetweenSets(restBetweenSets + 1);
    };


    const handleInputChange = (setValue: (value: number) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10);
        setValue(newValue);
    };
    return (
        <div className="w-full flex flex-col text-center">
            <p className="text-bold">
                Circuit Form Component
            </p>
            <form
                className="w-full flex flex-col items-center justify-center gap-4"
                onSubmit={(event) => event.preventDefault()}
            >
                <SetInput
                    label="Prepare"
                    value={prepareTime}
                    handleDecrement={handlePrepareDecrement}
                    handleIncrement={handlePrepareIncrement}
                    handleInputChange={handleInputChange(setPrepareTime)}
                />
                <SetInput
                    label="Work Time"
                    value={workTime}
                    handleDecrement={handleWorkDecrement}
                    handleIncrement={handleWorkIncrement}
                    handleInputChange={handleInputChange(setWorkTime)}
                />
                <SetInput
                    label="Rest Time"
                    value={restTime}
                    handleDecrement={handleRestDecrement}
                    handleIncrement={handleRestIncrement}
                    handleInputChange={handleInputChange(setRestTime)}
                />
                <SetInput
                    label="Rounds"
                    value={rounds}
                    handleDecrement={handleRoundsDecrement}
                    handleIncrement={handleRoundsIncrement}
                    handleInputChange={handleInputChange(setRounds)}
                />
                <SetInput
                    label="Rest Between Sets"
                    value={restBetweenSets}
                    handleDecrement={handleRestBetweenSetsDecrement}
                    handleIncrement={handleRestBetweenSetsIncrement}
                    handleInputChange={handleInputChange(setRestBetweenSets)}
                />
                <button
                    type="submit"
                    className="black_btn"
                >Submit</button>
            </form>

        </div>
    )
}

export default Circuit;

