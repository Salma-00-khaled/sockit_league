import React from 'react';
import { IconButton, useColorMode, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={
        <Icon as={Ionicons} name={colorMode === 'dark' ? 'sunny' : 'moon'} />
      }
      borderRadius='full'
      _icon={{
        color: colorMode === 'dark' ? 'orange.300' : 'orange.500',
        size: 'md',
      }}
      _hover={{
        bg: 'orange.600:alpha.20',
      }}
      _pressed={{
        bg: 'orange.600:alpha.20',
        _icon: {
          name: colorMode === 'dark' ? 'sunny' : 'moon',
        },
        _ios: {
          _icon: {
            size: '2xl',
          },
        },
      }}
      onPress={toggleColorMode}
    />
  );
};

export default ThemeToggle;
