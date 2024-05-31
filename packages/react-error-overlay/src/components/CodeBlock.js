 

/* @flow */
import React from 'react';
import { redTransparent, yellowTransparent } from '../styles';

const _preStyle = {
  display: 'block',
  padding: '0.5em',
  marginTop: '0.5em',
  marginBottom: '0.5em',
  overflowX: 'auto',
  whiteSpace: 'pre-wrap',
  borderRadius: '0.25rem',
};

const primaryPreStyle = {
  ..._preStyle,
  backgroundColor: redTransparent,
};

const secondaryPreStyle = {
  ..._preStyle,
  backgroundColor: yellowTransparent,
};

const codeStyle = {
  fontFamily: 'Consolas, Menlo, monospace',
};

type CodeBlockPropsType = {|
  main: boolean,
  codeHTML: string,
|};

function CodeBlock(props: CodeBlockPropsType) {
  const preStyle = props.main ? primaryPreStyle : secondaryPreStyle;
  const codeBlock = { __html: props.codeHTML };

  return (
    <pre style={preStyle}>
      <code style={codeStyle} dangerouslySetInnerHTML={codeBlock} />
    </pre>
  );
}

export default CodeBlock;
