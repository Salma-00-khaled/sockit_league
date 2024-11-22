import React from 'react';
import { Badge, IconButton, Icon } from 'native-base';
import PropTypes from 'prop-types';

const SocialBadge = ({
  iconLibrary,
  iconName,
  badgeColor,
  iconColor,
  onPress,
  ...props
}) => {
  return (
    <Badge colorScheme={badgeColor} rounded='full' bg={badgeColor} {...props}>
      <IconButton
        icon={
          <Icon as={iconLibrary} name={iconName} size='md' color={iconColor} />
        }
        onPress={onPress}
      />
    </Badge>
  );
};

SocialBadge.propTypes = {
  iconLibrary: PropTypes.elementType.isRequired, // Icon library component, e.g., FontAwesome
  iconName: PropTypes.string.isRequired, // Name of the icon
  badgeColor: PropTypes.string.isRequired, // Color scheme for the badge
  iconColor: PropTypes.string.isRequired, // Color for the icon
  onPress: PropTypes.func.isRequired, // Function to handle press events
};

export default SocialBadge;
