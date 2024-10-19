import React from 'react';
import { SummaryModalProps } from '../types/props';

const SummaryModal = ({ summary, onClose }: SummaryModalProps) => {
    return (
        <div className="summary-modal-overlay">
          <div className="summary-modal-content">
            <h2>Circuit Summary</h2>
            <p>{summary}</p>
            <button
                onClick={onClose}
                className="summary-modal-btn"
            >
                Close
            </button>
          </div>
        </div>
    );
};

export default SummaryModal;