import React, { useState } from "react";
import { VStack, Text } from "native-base";
import BackButton from "../../components/BackButton";
import GradientButton from "../../components/GradientButton";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../shared/Input";
import useShowToast from "../../customHooks/showToast";

const CreateNewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const showToast = useShowToast();

  const handleSubmit = () => {
    // Validation logic
    if (!password || !confirmPassword) {
      showToast("Error", "Please fill all inputs!");
      return;
    }

    if (password !== confirmPassword) {
      showToast("Error", "Passwords do not match!");
      return;
    }

    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Proceed with submission logic
  };

  return (
    <SafeAreaView className="flex-1 px-6 bg-[#181928]">
      <BackButton size={20} className="mt-6" color="black" />
      <VStack className="mt-10 space-y-6">
        <Text className="text-2xl font-bold text-white">Create New Password</Text>
        <Text className="text-base text-white">
          Please create a new password that is secure and easy to remember.
        </Text>

        <Input
          placeholder="Password"
          value={password}
          onChangeText={(e) => setPassword(e)}
          type="password"
          showPasswordToggle={true}
          isInvalid={!!errors.password}
          errorMessage={errors.password}
        />
        <Input
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(e) => setConfirmPassword(e)}
          type="password"
          showPasswordToggle={true}
          isInvalid={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword}
        />

        <GradientButton onPress={handleSubmit} className="mt-4">
          Reset Password
        </GradientButton>
      </VStack>
    </SafeAreaView>
  );
};

export default CreateNewPassword;
