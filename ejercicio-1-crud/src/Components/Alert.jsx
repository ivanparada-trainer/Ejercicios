import React, { useEffect } from 'react';
import styled from 'styled-components';

const AlertWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${props => (props.type === 'success' ? '#4CAF50' : '#f44336')};
  color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  opacity: ${props => (props.visible ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;

const Alert = ({ message, type, visible, duration, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration, onClose]);

  return (
    <AlertWrapper type={type} visible={visible}>
      {message}
    </AlertWrapper>
  );
};

export default Alert;
