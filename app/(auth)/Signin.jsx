import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { VStack, Text, Link, HStack, Center, Box } from "native-base";

import { getPasswordError } from "../../validations/signupValidation/getPasswordError";
import { saveKeyToStorage } from "../../utils/setup";
import { isFormValid } from "../../validations/signupValidation/signup";
import { getEmailError } from "../../validations/signupValidation/getEmailError";

import BackButton from "../../components/BackButton";
import Input from "../../shared/Input";
import useShowToast from "../../customHooks/showToast";
import { loginUser } from "../../API/services/user";
import CustomButton from "../../shared/CustomButton";
import { Pressable } from "react-native";
import { router } from "expo-router";

export default function SignIn() {
  const showToast = useShowToast();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = {};
    const emailError = getEmailError(email);
    if (emailError) newErrors.email = emailError;

    const passwordError = getPasswordError(password);
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);
  }, [email, password]);

  const handleSignIn = async () => {
    if (!email || !password) {
      showToast("Error", "Please fill all inputs!");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      showToast("Please enter a valid email address");
      return;
    }

    const requestBody = {
      email: email.toLowerCase().trim(),
      password,
    };

    try {
      const { data } = await loginUser(requestBody);
      const hasSuccess = data.success;

      if (!hasSuccess) {
        showToast("Login", "Login failed", "error");
        throw new Error("Login failed with code");
      }

      showToast("Login", "Login successful", "success");
      await saveKeyToStorage("user", data);
      await saveKeyToStorage("token", data.token);
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message || "This account does not exist";
      console.error("Login API Error:", error);
      showToast("Login Error", errorMessage, "error");
    }
  };

  const formData = { password, email };
  const isValid = isFormValid(errors, formData);

  return (
    <SafeAreaView className="flex-1 bg-[#181928] px-6">
      <BackButton size={20} className="mt-16" color="black" />

      <VStack className="mt-5 mb-12 space-y-2">
        <Text className="text-2xl text-white">Welcome to</Text>
        <Text className="text-2xl font-bold text-white">Sockit League</Text>
      </VStack>

      {/* Input Fields */}
      <VStack className="space-y-4 mb-12">
      <Input
          placeholder="Enter your Email"
          value={email}
          onChangeText={(e) => setEmail(e)}
          isInvalid={!!errors.email}
          errorMessage={errors.email}
        />
        <Input
          placeholder="Enter your Password"
          value={password}
          onChangeText={(e)=>setPassword(e)}
          type="password"
          showPasswordToggle={true}
          isInvalid={!!errors.password}
          errorMessage={errors.password}
        />
        {/* Forgot Password Link */}
        <Link
          onPress={() => navigation.navigate("ForgetPassword")}
          className="self-end"
          _text={{ fontSize: "sm", color: "#9393b3" }}
        >
          Forgot Password?
        </Link>
      </VStack>

      {/* Login Button */}
      <CustomButton
        onPress={handleSignIn}
        isDisabled={!isValid}
        colorScheme="primary"
      >
        Login
      </CustomButton>

      <Box flex={1} justifyContent="flex-end" mb={6}>
          <HStack justifyContent="center" mt={5}>
            <Text color="white">Don't have an account?</Text>
            <Pressable onPress={() => router.push("Signup")}>
              <Text color="purple.300" ml={1}>
                Register Now
              </Text>
            </Pressable>
          </HStack>
        </Box>
    </SafeAreaView>
  );
}
