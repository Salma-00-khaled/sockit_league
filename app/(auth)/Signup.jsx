import React, { useState, useEffect } from "react";
import { Box, Center, HStack, Link, Text, VStack } from "native-base";

import Input from "../../shared/Input";
import { saveKeyToStorage } from "../../utils/setup";

import { isFormValid } from "../../validations/signupValidation/signup";
import useShowToast from "../../customHooks/showToast";

import { getPasswordError } from "../../validations/signupValidation/getPasswordError";

import { getEmailError } from "../../validations/signupValidation/getEmailError";

import CustomButton from "../../shared/CustomButton";
import { registerUser } from "../../API/services/user";
import { getUsernameError } from "../../validations/signupValidation/getUsernameError";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "../../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { router } from "expo-router";

function Signup() {
  const showToast = useShowToast();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = {};

    const emailError = getEmailError(email);
    if (emailError) newErrors.email = emailError;

    const passwordError = getPasswordError(password);
    if (passwordError) newErrors.password = passwordError;
    const usernameError = getUsernameError(password);
    if (usernameError) newErrors.username = usernameError;

    setErrors(newErrors);
  }, [username, password, email]);

  const handleSignup = async () => {
    let requestBody = {};

    if (password !== confirmPassword) {
      showToast("Error", "Passwords do not match!");
    } else if (!password || !confirmPassword || !email || !username) {
      showToast("Error", "please fill all inputs!");
    } else {
      console.log(
        ` Email: ${email}, Password: ${password},confirmPassword:${confirmPassword},Username:${username}`
      );

      // Construct request body based on user type

      requestBody = {
        email: email.toLowerCase().trim(),
        username: username.trim(),
        password,
        confirmPassword,
      };

      try {
        console.log(requestBody);
        const { data } = await registerUser(requestBody);
        console.log(data);
        const hasSuccess = data.success;

        if (!hasSuccess) {
          showToast("Signup", "Signup failed", "error");
          throw new Error("Signup failed with code ");
        }

        showToast("Signup", "Signup successful", "success");
        await saveKeyToStorage("user", data);
        await saveKeyToStorage("token", data.token);
      } catch (e) {
        console.log(e);

        // Handle error
      }
    }
  };

  const formData = {
    password,
    email,
    username,
  };
  const isValid = isFormValid(errors, formData);
  return (
    <SafeAreaView className="flex-1  px-6 bg-[#181928]">
      <BackButton size={20} style="mt-16" color="black" />

      <VStack className="mb-12">
        <Input
          placeholder="Username"
          value={username}
          onChangeText={(e)=>setUsername(e)}
          isInvalid={!!errors.username}
          errorMessage={errors.username}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(e)=>setEmail(e)}
          isInvalid={!!errors.email}
          errorMessage={errors.email}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={(e)=>setPassword(e)}
          type="password"
          showPasswordToggle={true}
          isInvalid={!!errors.password}
          errorMessage={errors.password}
        />
        <Input
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(e)=>setConfirmPassword(e)}
          type="password"
          showPasswordToggle={true}
          isInvalid={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword}
        />
      </VStack>
      <CustomButton
        onPress={handleSignup}
        colorScheme="primary"
        isDisabled={!isValid}
      >
        Sign Up
      </CustomButton>
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
    </SafeAreaView>
  );
}

export default Signup;
