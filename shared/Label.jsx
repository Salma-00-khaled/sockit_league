import React from 'react';
import { Text } from 'native-base';
import PropTypes from 'prop-types'; // Import PropTypes
const Label = ({
  children,
  fontSize = 'md',
  fontWeight = 'normal',
  color = 'black',
  ...props
}) => (
  <Text fontSize={fontSize} fontWeight={fontWeight} color={color} {...props}>
    {children}
  </Text>
);

// Add PropTypes validation
Label.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

export default Label;
