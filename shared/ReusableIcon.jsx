import React from 'react';
import { Icon, useColorModeValue } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
const ReusableIcon = ({
  name = '',
  size = 16,
  lightColor,
  darkColor,
  accessibilityLabel,
  ...props
}) => {
  const iconColor = useColorModeValue(lightColor, darkColor);

  return (
    <Icon
      as={FontAwesome}
      name={name}
      size={size}
      color={iconColor}
      accessibilityLabel={accessibilityLabel}
      {...props}
    />
  );
};

// Add PropTypes validation
ReusableIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lightColor: PropTypes.string,
  darkColor: PropTypes.string,
  accessibilityLabel: PropTypes.string,
};

// Set default props if needed
ReusableIcon.defaultProps = {
  size: 'md',
  lightColor: 'black',
  darkColor: 'white',
  accessibilityLabel: 'icon',
};

export default ReusableIcon;
