import { Button, Image, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <>
      <SafeAreaView className="flex-1 items-center justify-center bg-[#181928]">
        <StatusBar animated={true} hidden={true} style="light" />

        <Image
          source={require("../assets/images/logo.png")}
          className="w-full h-[400px]"
          resizeMode="contain"
        />
        <View className="justify-end">
          <Button
            title="Go to Signin Page"
            onPress={() => router.push("Signin")}
          />
          <Button title="Go to Home Page" onPress={() => router.push("Home")} />
        </View>
      </SafeAreaView>
     
    </>
  );
};

export default App;
