// give prop type of label and a handleDecrement handleIncrement function

export interface SetInputProps {
    label: string;
    value: number;
    handleDecrement: () => void;
    handleIncrement: () => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// make an enum string type
// valid strings are PREPARE, WORKSET, REST, REST_BETWEEN_SETS
export enum WorkoutState {
    PREPARE = 'PREPARE',
    WORKSET = 'WORKSET',
    REST = 'REST',
    REST_BETWEEN_SETS = 'BETWEEN SETS'
}

export interface CountdownTimerProps {
    label: string;
    duration: number;
    workoutState: WorkoutState;
    onComplete: () => void;
}

export interface TimeRenderProps {
    remainingTime: number;
    onComplete: () => void;
}

export interface SummaryModalProps {
    summary: string;
    onClose: () => void;
}