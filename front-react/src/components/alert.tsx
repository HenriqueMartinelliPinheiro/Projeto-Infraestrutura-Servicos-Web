// src/components/Alert.tsx
import React from 'react';

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="p-4 bg-blue-500 text-white rounded-md relative">
      <span>{message}</span>
      <button 
        onClick={onClose} 
        className="absolute top-0 right-0 mt-2 mr-2 text-xl leading-none"
      >
        &times;
      </button>
    </div>
  );
};

export default Alert;
