import React from 'react';
import { Avatar } from 'native-base';
import PropTypes from 'prop-types';

const CustomAvatar = ({ source, size = 'md', ...props }) => {
  return <Avatar source={source} size={size} {...props} />;
};

CustomAvatar.propTypes = {
  source: PropTypes.object.isRequired, // Avatar image source
  size: PropTypes.string,
};

export default CustomAvatar;
