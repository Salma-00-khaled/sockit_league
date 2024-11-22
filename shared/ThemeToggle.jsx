import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { HStack, Switch, useColorMode } from 'native-base';
import ReusableIcon from './ReusableIcon';

const ThemeToggle = ({
  iconSize,
  switchSize,
  containerProps,
  iconContainerProps,
  lightIconAccessibilityLabel,
  darkIconAccessibilityLabel,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      justifyContent='flex-end'
      alignItems='center'
      w='100%'
      p={4}
      {...containerProps}
    >
      <HStack
        alignItems='center'
        p={1}
        borderRadius='full'
        {...iconContainerProps}
      >
        <ReusableIcon
          name='sun-o'
          size={iconSize}
          lightColor='yellow.500'
          darkColor='gray.400'
          accessibilityLabel={lightIconAccessibilityLabel}
        />

        <Switch
          mx={1}
          size={switchSize}
          isChecked={colorMode === 'dark'}
          onToggle={toggleColorMode}
        />

        <ReusableIcon
          name='moon-o'
          size={iconSize}
          lightColor='blue.500'
          darkColor='yellow.400'
          accessibilityLabel={darkIconAccessibilityLabel}
        />
      </HStack>
    </HStack>
  );
};

// Define prop types
ThemeToggle.propTypes = {
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  switchSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  containerProps: PropTypes.object,
  iconContainerProps: PropTypes.object,
  lightIconAccessibilityLabel: PropTypes.string,
  darkIconAccessibilityLabel: PropTypes.string,
};

// Define default values for props
ThemeToggle.defaultProps = {
  iconSize: 24,
  switchSize: 'md',
  containerProps: {},
  iconContainerProps: {},
  lightIconAccessibilityLabel: 'Switch to light mode',
  darkIconAccessibilityLabel: 'Switch to dark mode',
};

export default ThemeToggle;
