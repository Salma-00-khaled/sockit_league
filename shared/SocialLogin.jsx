import React from 'react';
import { HStack, Tooltip } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import Label from './Label';
import SocialBadge from './SocialBadge';

const SocialLogin = ({
  handleSocialLogin,
  textColor = '#DB4437',
  badgeBg = '',
}) => {
  return (
    <>
      <Label color={textColor} marginBottom={4}>
        Or login with
      </Label>
      <HStack space={4}>
        <Tooltip label='Login with Google' openDelay={500}>
          <SocialBadge
            iconLibrary={FontAwesome}
            iconName='google'
            badgeColor={badgeBg}
            iconColor='#DB4437'
            onPress={() => handleSocialLogin('google')}
            colorScheme='google'
          />
        </Tooltip>

        <Tooltip label='Login with Facebook' openDelay={500}>
          <SocialBadge
            iconLibrary={FontAwesome}
            iconName='facebook'
            badgeColor={badgeBg}
            iconColor='#4267B2'
            onPress={() => handleSocialLogin('facebook')}
            colorScheme='facebook'
          />
        </Tooltip>

        <Tooltip label='Login with Apple' openDelay={500}>
          <SocialBadge
            iconLibrary={FontAwesome}
            iconName='apple'
            badgeColor={badgeBg}
            iconColor='#000000'
            onPress={() => handleSocialLogin('facebook')}
            size='md'
            colorScheme='apple'
          />
        </Tooltip>
      </HStack>
    </>
  );
};

// Define prop types
SocialLogin.propTypes = {
  handleSocialLogin: PropTypes.func.isRequired,
  textColor: PropTypes.string,
  badgeBg: PropTypes.string,
};

// Define default props
SocialLogin.defaultProps = {
  textColor: 'black',
  badgeBg: 'gray.200',
};

export default SocialLogin;
