import React, { useState, useEffect } from 'react';
import './Message.css';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
}

const Message: React.FC<ToastProps> = ({ type, message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // Set the duration for the toast to be visible (e.g., 3 seconds)

    return () => clearTimeout(timer);
  }, []);

  return visible ? (
    <div className={`toast ${type}`}>
      <p>{message}</p>
    </div>
  ) : null;
};

export default Message;
