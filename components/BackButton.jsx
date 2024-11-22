import {  TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const BackButton = ({ children, size, color, style }) => {
  const handlePress = () => {
    router.back();
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`mt-10 mb-2 ml-2 w-12 ${style}`}
    >
      <LinearGradient
        colors={["#4568dc", "#b06ab3"]}
        className="p-[15px] rounded-xl align-middle justify-center"
      >
        <Ionicons
          className="p-2 rounded-2xl text-center"
          name="chevron-back-outline"
          size={size}
          color={color}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default BackButton;
