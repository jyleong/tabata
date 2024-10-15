// give prop type of label and a handleDecrement handleIncrement function

export interface SetInputProps {
    label: string;
    value: number;
    handleDecrement: () => void;
    handleIncrement: () => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}