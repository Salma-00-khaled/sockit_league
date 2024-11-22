import React from 'react';
import {
  Box,
  VStack,
  Button,
  useColorMode,
  Actionsheet,
  HStack,
  Pressable,
  ScrollView,
  Text,
} from 'native-base';
import PropTypes from 'prop-types'; // Import PropTypes
import { colors } from '../utils/setup';

const ColorPickerModal = ({ isOpen, onClose, onSelect }) => {
  const { colorMode } = useColorMode();

  const renderColor = (item) => (
    <Pressable key={Math.random() * 1000} onPress={() => onSelect(item)}>
      <VStack alignItems='center' m={1}>
        <Box
          size='50px'
          bg={item.value}
          borderRadius='25px'
          borderWidth={colorMode === 'dark' ? '2px' : '1px'}
          borderColor={colorMode === 'dark' ? 'white' : 'black'}
        />
      </VStack>
    </Pressable>
  );

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <Box w='100%' h={60} px={4} justifyContent='center'>
          <Text fontSize='lg' color='gray.500'>
            Select a Color
          </Text>
        </Box>
        <ScrollView w='100%'>
          <HStack flexWrap='wrap' justifyContent='center'>
            {colors.map((color) => renderColor(color))}
          </HStack>
        </ScrollView>
        <Button mt={4} onPress={onClose}>
          Close
        </Button>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
// Add PropTypes validation
ColorPickerModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};
export default ColorPickerModal;
