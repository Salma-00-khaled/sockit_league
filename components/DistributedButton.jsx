import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const DistributedButton = ({ length, onChange }) => {
  const [inputs, setInputs] = useState(Array(length).fill(""));
  const textInputRefs = useRef([]);

  // Ensure the refs array is updated when `length` changes
  useEffect(() => {
    textInputRefs.current = Array.from(
      { length },
      (_, index) => textInputRefs.current[index] || React.createRef()
    );
  }, [length]);

  const handleChange = (text, index) => {
    const newInputs = [...inputs];
    newInputs[index] = text;

    // Move focus to next input if not the last one
    if (text && index < length - 1) {
      textInputRefs.current[index + 1]?.current?.focus();
    }

    setInputs(newInputs);
    onChange(newInputs.join("")); // Send updated value to parent
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === "Backspace" && index > 0 && !inputs[index]) {
      const newInputs = [...inputs];
      newInputs[index - 1] = ""; // Clear previous input
      setInputs(newInputs);
      onChange(newInputs.join(""));
      textInputRefs.current[index - 1]?.current?.focus(); // Move focus to previous input
    }
  };

  const handleFocus = (index) => {
    // Clear the field when focused (optional, based on UX needs)
    const newInputs = [...inputs];
    newInputs[index] = "";
    setInputs(newInputs);
    onChange(newInputs.join(""));
  };

  return (
    <View style={styles.container}>
      {inputs.map((input, index) => (
        <TextInput
          key={index}
          ref={textInputRefs.current[index]}
          style={styles.input}
          value={input}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(event) => handleKeyPress(event, index)}
          onFocus={() => handleFocus(index)}
          maxLength={1}
          keyboardType="numeric"
          textAlign="center"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  input: {
    height: 56,
    width: 56,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});

export default DistributedButton;
