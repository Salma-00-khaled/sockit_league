// LoadingSpinner.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';

const LoadingSpinner = ({
  color = 'cyan.500',
  size = 'sm',
  style = { marginTop: 12 },
  ...props
}) => {
  return <Spinner {...props} color={color} size={size} style={style} />;
};

// Define PropTypes for validation
LoadingSpinner.propTypes = {
  color: PropTypes.string, // Color of the spinner
  size: PropTypes.oneOf(['sm', 'md', 'lg']), // Size of the spinner
  style: PropTypes.object, // Custom style for the spinner
};

export default LoadingSpinner;
