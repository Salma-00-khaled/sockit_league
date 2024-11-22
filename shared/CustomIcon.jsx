import React from 'react';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

const CustomIcon = ({ iconLibrary, iconName, size, color, ...props }) => {
  return (
    <Icon
      as={iconLibrary}
      name={iconName}
      size={size}
      color={color}
      {...props}
    />
  );
};

CustomIcon.propTypes = {
  iconLibrary: PropTypes.elementType.isRequired, // The icon library, e.g., FontAwesome
  iconName: PropTypes.string.isRequired, // The name of the icon
  size: PropTypes.string, // The size of the icon (e.g., 'sm', 'md', 'lg')
  color: PropTypes.string, // The color of the icon
};

CustomIcon.defaultProps = {
  size: 'md', // Default size is 'md' if not provided
  color: 'black', // Default color is 'black' if not provided
};

export default CustomIcon;
