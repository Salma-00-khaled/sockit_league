import React from "react";
import { HStack, IconButton, Box } from "native-base";
import PropTypes from "prop-types"; // Import PropTypes
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import CustomIcon from "./CustomIcon";
import Label from "./Label";
import CustomButton from "./CustomButton";

const CustomHeader = ({ title, onButtonPress }) => {
  const navigation = useNavigation();

  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      px={4}
      py={2}
      bg="white"
    >
      <IconButton
        icon={
          <CustomIcon
            as={FontAwesome}
            name="arrow-left"
            size="sm"
            color="black"
          />
        }
        onPress={() => navigation.goBack()}
      />
      <Label
        flex={1}
        textAlign="center"
        fontSize="lg"
        fontWeight="bold"
        color="black"
      >
        {title}
      </Label>
      {onButtonPress ? (
        <CustomButton
          onPress={onButtonPress}
          variant="outline"
          colorScheme="primary"
        >
          Button
        </CustomButton>
      ) : (
        <Box w={8} /> // Placeholder to keep spacing
      )}
    </HStack>
  );
};
// Add PropTypes validation
CustomHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func,
};
export default CustomHeader;
