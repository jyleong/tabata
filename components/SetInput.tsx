'use client';
import React from 'react';
import { SetInputProps } from '../types/props';


const SetInput: React.FC<SetInputProps> = ({ label, value, handleDecrement, handleIncrement, handleInputChange }: SetInputProps) => {

  return (
    <div className="w-full flex flex-col">
      <label className="mb-2 font-extrabold">{label}</label>
      <div className="items-center">
        <button
        className="mr-2 button-circle"
        onClick={handleDecrement}>
            -
        </button>
        <input
          className="set-input-wide"
          type="number"
          value={value}
          onChange={handleInputChange}
          style={{ width: '50px', textAlign: 'center' }}
        />
        <button
        className="ml-2 button-circle"
        onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default SetInput;