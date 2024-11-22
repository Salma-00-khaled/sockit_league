import React, { useState } from 'react';
import {
  Modal,
  Button,
  Box,
  Checkbox,
  Text,
  Pressable,
  FlatList,
  useColorModeValue,
} from 'native-base';
import PropTypes from 'prop-types';
import _ from 'lodash'; // Ensure lodash is imported correctly
const MultiSelectDropdown = ({
  options,
  selectedValues,
  onValueChange,
  placeholder = 'Select options',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (value) => {
    onValueChange((prevSelectedValues) => {
      if (prevSelectedValues.includes(value)) {
        // Remove the value if it's already selected
        return prevSelectedValues.filter((val) => val !== value);
      } else {
        // Add the value if it's not selected and ensure uniqueness
        return _.uniq([...prevSelectedValues, value]);
      }
    });
  };

  const selectedLabels = options
    .filter((option) => selectedValues.includes(option.value))
    .map((option) => option.label)
    .join(', ');

  return (
    <Box>
      <Pressable onPress={() => setIsOpen(true)}>
        <Box
          p={2}
          borderWidth={1}
          borderRadius={5}
          mb={2}
          bg={useColorModeValue('white', 'gray.700')} // Align input background with theme
        >
          <Text color='gray.500'>{selectedLabels || placeholder}</Text>
        </Box>
      </Pressable>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size='lg'>
        <Modal.Content maxWidth='400px'>
          <Modal.CloseButton />
          <Modal.Header>Select Business Types</Modal.Header>
          <Modal.Body>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Checkbox
                  key={item.value}
                  value={item.value}
                  isChecked={selectedValues.includes(item.value)}
                  onChange={() => handleToggle(item.value)}
                  _checked={{ bg: 'primary.500' }}
                >
                  {item.label}
                </Checkbox>
              )}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={() => setIsOpen(false)}>Done</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

// Define PropTypes for the component
MultiSelectDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  onValueChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

// Provide default props

export default MultiSelectDropdown;
