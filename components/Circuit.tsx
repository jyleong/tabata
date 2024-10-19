'use client';

import React, { useState }  from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
import SetInput from '@components/SetInput';
import SummaryModal from '@components/SummaryModal';

const Circuit = () => {

    const [prepareTime, setPrepareTime] = useState(5);
    const [workTime, setWorkTime] = useState(30);
    const [restTime, setRestTime] = useState(30);
    const [cycles, setCycles] = useState(10);
    const [sets, setSets] = useState(5);
    const [restBetweenSets, setRestBetweenSets] = useState(30);
    const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
    const [summary, setSummary] = useState('');

    const router = useRouter();
    const searchParams = useSearchParams();
    
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

    const handleCyclesDecrement = () => {
        setCycles(cycles - 1);
    };

    const handleCyclesIncrement = () => {
        setCycles(cycles + 1);
    };

    const handleSetsDecrement = () => {
        setSets(sets - 1);
    };

    const handleSetsIncrement = () => {
        setSets(sets + 1);
    }

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

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const params = new URLSearchParams(searchParams);
        params.set('prepareTime', prepareTime.toString());
        params.set('workTime', workTime.toString());
        params.set('restTime', restTime.toString());
        params.set('cycles', cycles.toString());
        params.set('sets', sets.toString());
        params.set('restBetweenSets', restBetweenSets.toString());
        const newPath = '/timer?' + params.toString();
        router.push(newPath);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes} minutes, ${seconds} seconds`;
      };

    const handleSummaryClick = () => {
        const totalWorkTime = workTime * sets * cycles;
        const totalRestTime = (restTime * sets * cycles) - restTime;
        const totalTime = prepareTime + totalWorkTime + totalRestTime + (restBetweenSets * (cycles-1))
        const summary = `
          Number of Sets: ${sets}
          Total time: ${formatTime(totalTime)}
          Work time: ${formatTime(totalWorkTime)} - ${sets * cycles} intervals
          Rest time: ${formatTime(totalRestTime)} - ${(cycles + sets - 1)} intervals
          Rest between sets time: ${formatTime(restBetweenSets * (cycles-1))}
        `;
      
        setIsSummaryModalOpen(true);
        setSummary(summary);
      };

    return (
        <div className="w-full flex flex-col text-center">
            <button onClick={handleSummaryClick}>Summary</button>
            {isSummaryModalOpen && (
                <SummaryModal summary={summary} onClose={() => setIsSummaryModalOpen(false)} />
            )}

            <form
                className="w-full flex flex-col items-center justify-center gap-4"
                onSubmit={handleOnSubmit}
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
                    label="Cycles"
                    value={cycles}
                    handleDecrement={handleCyclesDecrement}
                    handleIncrement={handleCyclesIncrement}
                    handleInputChange={handleInputChange(setCycles)}
                />
                <SetInput
                    label="Sets"
                    value={sets}
                    handleDecrement={handleSetsDecrement}
                    handleIncrement={handleSetsIncrement}
                    handleInputChange={handleInputChange(setSets)}
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

