 

/* @flow */
import React from 'react';
import { black } from '../styles';

const closeButtonStyle = {
  color: black,
  lineHeight: '1rem',
  fontSize: '1.5rem',
  padding: '1rem',
  cursor: 'pointer',
  position: 'absolute',
  right: 0,
  top: 0,
};

type CloseCallback = () => void;
function CloseButton({ close }: {| close: CloseCallback |}) {
  return (
    <span
      title="Click or press Escape to dismiss."
      onClick={close}
      style={closeButtonStyle}
    >
      ×
    </span>
  );
}

export default CloseButton;
