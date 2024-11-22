// Import necessary libraries and components
import React, { useState } from "react";
import moment from "moment-timezone";
import PropTypes from "prop-types";
import { Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Box, FormControl, Pressable, useColorModeValue } from "native-base";

// Import custom components
import Label from "./Label"; // Make sure the path to 'Label' is correct

const MyDatePicker = ({
  date,
  setDate,
  mode = "date", // Default to 'date' mode
  display = Platform.OS === "ios" ? "spinner" : "default", // Display style
  confirmLabel = "Done", // Default confirm button label
  cancelLabel = "Cancel", // Default cancel button label
  format = "YYYY-MM-DD", // Default date format
}) => {
  const [showPicker, setShowPicker] = useState(false); // Controls picker visibility
  const [tempDate, setTempDate] = useState(new Date(date || Date.now())); // Use `date` prop or current date if undefined

  const timezone = moment.tz.guess();
  const formattedDate = moment(tempDate).tz(timezone).format(format);

  const onChange = (event, selectedDate) => {
    if (Platform.OS === "android") setShowPicker(false); // Close on Android after selection
    if (selectedDate) {
      setTempDate(selectedDate);
      setDate(selectedDate);
    }
  };

  const showDatePicker = () => setShowPicker(true);

  // Styling variables using `useColorModeValue`
  const placeholderTextColor = useColorModeValue("gray.500", "gray.300");
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const labelColor = useColorModeValue("gray.100", "white");

  return (
    <FormControl isRequired>
      <FormControl.Label mb={2} color={labelColor}>
        Date
      </FormControl.Label>
      <Pressable onPress={showDatePicker} w="100%">
        <Box
          bg={bgColor}
          py={3}
          px={4}
          borderRadius="md"
          borderWidth={1}
          borderColor={useColorModeValue("gray.800", "gray.200")}
        >
          <Label color={placeholderTextColor} fontSize="md">
            {formattedDate}
          </Label>
        </Box>
      </Pressable>

      {/* Conditionally render DateTimePicker */}
      {showPicker && (
        <DateTimePicker
          value={tempDate}
          mode={mode}
          display={display}
          is24Hour={true}
          onChange={onChange}
          positiveButton={{
            label: confirmLabel,
            onPress: () => setShowPicker(false),
          }}
          negativeButton={{
            label: cancelLabel,
            onPress: () => setShowPicker(false),
          }}
        />
      )}
    </FormControl>
  );
};

MyDatePicker.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired, // Expecting a Date object
  setDate: PropTypes.func.isRequired, // Expecting a function
  mode: PropTypes.oneOf(["date", "time", "datetime"]), // Mode of the picker
  display: PropTypes.oneOf(["default", "spinner", "clock", "calendar"]), // Display type
  confirmLabel: PropTypes.string, // Confirm button label
  cancelLabel: PropTypes.string, // Cancel button label
  format: PropTypes.string, // Date format
};

export default MyDatePicker;
