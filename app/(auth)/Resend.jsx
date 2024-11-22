import React, { useCallback, useState } from "react";
import { VStack, HStack, Text, Pressable } from "native-base";
import BackButton from "../../components/BackButton";
import GradientButton from "../../components/GradientButton";

import { useNavigation } from "@react-navigation/native";
import DistributedButton from "../../components/DistributedButton";
import { SafeAreaView } from "react-native-safe-area-context";

const Resend = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState("");
  
  const handleCodeChange = useCallback((newCode) => {
    // Compare directly to avoid unnecessary dependency loop
    setCode((prevCode) => (newCode.length <= 4 && newCode !== prevCode ? newCode : prevCode));
  }, []);


  const handleVerify = () => {
    console.log("Verification code:", code);
    navigation.navigate("CreateNewPassword");
  };

  return (
    <SafeAreaView className="flex-1 px-6 bg-[#181928]">
     
      <BackButton size={20} className="mt-6" color="black" />
     
       <VStack className="mt-10 mb-12 space-y-4">
        <Text className="text-2xl font-bold text-white">Verification</Text>
        <Text className="text-base text-white">
        We have sent another code to your email address.
        </Text>
      </VStack>

      
      <DistributedButton length={4} onChange={handleCodeChange} />

      
      <GradientButton onPress={handleVerify} className="mt-8">
        Verify
      </GradientButton>

      {/* Entered Code Display */}
      {code.length > 0 && (
        <Text className="text-lg text-center text-[#D2B5FF] mt-5">
          Entered Code: {code}
        </Text>
      )}

      {/* Resend Section */}
      <VStack className="flex-1 justify-end mb-6">
        <HStack className="justify-center space-x-1">
          <Text className="text-white">Don't receive a code?</Text>
          <Pressable onPress={() => navigation.navigate("Resend")}>
            <Text className="font-bold text-[#D2B5FF]">Resend</Text>
          </Pressable>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
};

export default Resend;
