 

/* @flow */
function isBultinErrorName(errorName: ?string) {
  switch (errorName) {
    case 'EvalError':
    case 'InternalError':
    case 'RangeError':
    case 'ReferenceError':
    case 'SyntaxError':
    case 'TypeError':
    case 'URIError':
      return true;
    default:
      return false;
  }
}

export { isBultinErrorName };
export default isBultinErrorName;
