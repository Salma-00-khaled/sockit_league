import React, { useState } from "react";
import {
  VStack,
  Text,
  Box,
  HStack,
  Pressable,
} from "native-base";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../shared/CustomButton";
import BackButton from "../../components/BackButton";

import Input from "../../shared/Input";
import useShowToast from "../../customHooks/showToast";


const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  
  const navigation = useNavigation();
  const router = useRouter();
  const showToast = useShowToast();

  const handleSendCode = () => {
    if (!email ) {
      showToast("please enter your email");
      return;
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      showToast("Please enter a valid email address");
      return;
    };
    // Add your logic to send the code here

    // After successfully sending the code, navigate to the Verification screen
    // router.push("Verification");
    navigation.navigate("Verification");

}

  return (
    <SafeAreaView className="flex-1  px-6 bg-[#181928]">
      <VStack flex={1} space={5}>
        {/* Back Button */}
        <BackButton size={20} style="mt-16" color="black" />

        {/* Title and Description */}
        <Box mt={5}>
          <Text fontSize="2xl" color="white" fontWeight="bold">
            Forgot Password?
          </Text>
          <Text fontSize="md" color="white" mt={2}>
            Don't worry! It happens. Please enter your email address linked
            with your account.
          </Text>
        </Box>

        {/* Email Input */}
        
      
       <Input
          placeholder="Enter your Email"
          value={email}
          onChangeText={(e) => setEmail(e)}
          isInvalid={!!errors.email}
          errorMessage={errors.email}
        />
    
        {/* Send Code Button */}
        <CustomButton
        onPress={handleSendCode}
        colorScheme="primary"
        
      >
        Send Code
      </CustomButton>
        {/* Footer with Login Link */}
        <Box flex={1} justifyContent="flex-end" mb={6}>
          <HStack justifyContent="center" mt={5}>
            <Text color="white">Remember password?</Text>
            <Pressable onPress={() => router.push("Signin")}>
              <Text color="purple.300" ml={1}>
                Login
              </Text>
            </Pressable>
          </HStack>
        </Box>
      </VStack>

     
    </SafeAreaView>
  );
};

export default ForgetPassword;