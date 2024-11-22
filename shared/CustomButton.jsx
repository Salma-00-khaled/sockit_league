// components/CustomButton.js
import React from "react";

import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Label from "./Label";
// CustomButton Component
const CustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginVertical: 12 }}>
      <LinearGradient
        colors={["#4568dc", "#b06ab3"]}
        style={{
          padding: 15,
          borderRadius: 30,
          alignItems: "center", // Center align the content
        }}
      >
        <Label style={{ color: "white", fontSize: 16, textAlign: "center" }}>
          {children}
        </Label>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
// PropTypes for validation
CustomButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  colorScheme: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
