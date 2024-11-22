import React from 'react';
import { Image } from 'native-base';
import PropTypes from 'prop-types';

const CustomImage = ({ uri, alt, size, borderRadius, ...props }) => {
  return (
    <Image
      source={{ uri }}
      alt={alt}
      size={size || 'md'} // Default to 'md' if no size is provided
      borderRadius={borderRadius || 'md'} // Default to 'md' if no borderRadius is provided
      {...props}
    />
  );
};

// PropTypes for type checking
CustomImage.propTypes = {
  uri: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string,
  borderRadius: PropTypes.string,
};

export default CustomImage;
