import { TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Box } from "native-base";

const Input = ({ value, placeholder, style, handleChangeText, isHidden }) => {
  const [isTextHidden, setIsTextHidden] = useState(isHidden);

  return (
    <Box className="relative">
      <TextInput
        className="py-3 px-6 border border-gray-400 mb-3 rounded-lg bg-white text-[#414158]"
        placeholder={placeholder}
        value={value}
        secureTextEntry={isTextHidden}
        onChangeText={handleChangeText}
      />
      {!isHidden ? (
        <></>
      ) : (
        <TouchableOpacity
          onPress={() => setIsTextHidden(!isTextHidden)}
          className="absolute right-4 top-2 translate-y-[10px]"
        >
          <Ionicons
            name={isTextHidden ? "eye-off" : "eye"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      )}
    </Box>
  );
};

export default Input;
