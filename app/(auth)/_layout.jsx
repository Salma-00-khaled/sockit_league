import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
const AuthLayout = () => {
  return (
    <NativeBaseProvider>
      <StatusBar style="light" hidden={false} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" options={{ headerShown: false }} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} />
        <StatusBar style="light" backgroundColor="#161622" />
      </Stack>
    </NativeBaseProvider>
  );
};

export default AuthLayout;
