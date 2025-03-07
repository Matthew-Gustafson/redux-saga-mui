 

/* @flow */
const black = '#293238',
  darkGray = '#878e91',
  red = '#ce1126',
  redTransparent = 'rgba(206, 17, 38, 0.05)',
  lightRed = '#fccfcf',
  yellow = '#fbf5b4',
  yellowTransparent = 'rgba(251, 245, 180, 0.3)',
  white = '#ffffff';

const iframeStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  border: 'none',
  'z-index': 2147483647,
};

const overlayStyle = {
  width: '100%',
  height: '100%',
  'box-sizing': 'border-box',
  'text-align': 'center',
  'background-color': white,
};

const primaryErrorStyle = {
  'background-color': lightRed,
};

const secondaryErrorStyle = {
  'background-color': yellow,
};

export {
  iframeStyle,
  overlayStyle,
  primaryErrorStyle,
  secondaryErrorStyle,
  black,
  darkGray,
  red,
  redTransparent,
  yellowTransparent,
};
