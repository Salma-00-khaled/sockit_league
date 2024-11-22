import React from 'react';
import { Box, VStack, Input, Button, Text, Select, CheckIcon } from "native-base";
import { ImageBackground } from 'react-native';
import BackButton from '../../components/BackButton';

export default function CreateTeamScreen() {
  return (
    <ImageBackground
      source={require("../../assets/images/frame-picture.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      {/* Back Button at the Top-Left */}
      <BackButton
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
        }}
      />

      {/* New Match Text at the Top Center */}
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="white"
        position="absolute"
        top="5%"
        alignSelf="center"
        textAlign="center"
      >
        New Match
      </Text>

      <Box flex={1} justifyContent="center" alignItems="center">
        <VStack space={6} w="90%" maxW="400px">
          {/* Create Team Text */}
          <Text fontSize="xl" fontWeight="medium" color="white" alignSelf="flex-start">
            Create a new team!
          </Text>

          {/* Team Name Input */}
          <Box alignSelf="center" w="100%" alignItems="center">
            <Text fontSize="md" color="white" mb={2} alignSelf="flex-start">
              Team name:
            </Text>
            <Input
              placeholder="Enter team name"
              placeholderTextColor="gray.400"
              color="white"
              bg="#222232"
              borderRadius="10"
              width="80%"
              _focus={{
                borderColor: "#222232",
              }}
            />
          </Box>

          {/* Team Color Picker */}
          <Box alignSelf="center" w="100%" alignItems="center">
            <Text fontSize="md" color="white" mb={2} alignSelf="flex-start">
              Team color:
            </Text>
            <Select
              bg="#222232"
              placeholder="Select a color"
              placeholderTextColor="#222232"
              borderRadius="10"
              width="80%"
              _selectedItem={{
                bg: "#222232",
                endIcon: <CheckIcon size="5" />,
              }}
            >
              <Select.Item label="Red" value="red" />
              <Select.Item label="Blue" value="blue" />
              <Select.Item label="Green" value="green" />
            </Select>
          </Box>

          {/* Team Members Selector */}
          <Box alignSelf="center" w="100%" alignItems="center">
            <Text fontSize="md" color="white" mb={2} alignSelf="flex-start">
              Team members:
            </Text>
            <Select
              bg="#222232"
              placeholder="Select team members"
              placeholderTextColor="#222232"
              borderRadius="10"
              width="80%"
              _selectedItem={{
                bg: "#222232",
                endIcon: <CheckIcon size="5" />,
              }}
            >
              <Select.Item label="1 Player" value="1" />
              <Select.Item label="2 Players" value="2" />
              <Select.Item label="3 Players" value="3" />
            </Select>
          </Box>

          {/* Next Button */}
          <Button
            mt={4}
            bg="#414158"
            
            _pressed={{ bg: "#414158" }}
            borderRadius="full"
            _text={{ color: "white", fontWeight: "bold" }}
          >
            Next
          </Button>
        </VStack>
      </Box>
    </ImageBackground>
  );
}
