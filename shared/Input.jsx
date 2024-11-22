import React, { useState } from "react";
import {
  Input as NBInput,
  Pressable,
  Icon,
  Button,
  HStack,
  FormControl,
  Box,
} from "native-base";
import PropTypes from "prop-types"; // Import PropTypes
import { MaterialIcons } from "@expo/vector-icons";

const Input = ({
  title = "",
  value,
  onChangeText,
  placeholder = "",
  type = "text",
  showPasswordToggle = false,
  showSizeBtn = false,
  addSize = () => {},
}) => {
  const [show, setShow] = useState(false);

  return (
    <FormControl isRequired>
      {title && <FormControl.Label mb={2}>{title}</FormControl.Label>}
      <Box position="relative">
        <NBInput
          placeholder={placeholder}
          size='sm'
          value={value}
          onChangeText={onChangeText}
          type={showPasswordToggle ? (show ? "text" : "password") : type}
          w="100%"
          placeholderTextColor="#7777"
          borderWidth={1}
          borderRadius="lg"
          py={3} // Padding Y
          px={6} // Padding X
          color="#181928"
          bgColor="white"
          fontSize="sm" // Font size for the text
          InputRightElement={
            <HStack space={2} alignItems="center">
              {showPasswordToggle && (
                <Pressable onPress={() => setShow(!show)} pr={4}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={show ? "visibility" : "visibility-off"}
                      />
                    }
                    size={5}
                    color="muted.400"
                  />
                </Pressable>
              )}
              {showSizeBtn && (
                <Button size="xs" rounded="none" h="full" onPress={addSize}>
                  Add Size
                </Button>
              )}
            </HStack>
          }
        />
      </Box>
    </FormControl>
  );
};

// Add PropTypes validation
Input.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  showPasswordToggle: PropTypes.bool,
  showSizeBtn: PropTypes.bool,
  addSize: PropTypes.func,
};

export default Input;
