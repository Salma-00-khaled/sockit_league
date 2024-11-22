import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="my-3 ">
      <LinearGradient
        colors={["#4568dc", "#b06ab3"]}
        className="p-[15px] rounded-3xl align-middle"
      >
        <Text className="text-white text-base text-center">{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
