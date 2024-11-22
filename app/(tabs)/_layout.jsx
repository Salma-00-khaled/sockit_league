import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { NativeBaseProvider } from "native-base";

const TabsLayout = () => {
  return (
    <NativeBaseProvider>
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#232529",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="home" color={color} size={size} />;
          },
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="person" color={color} size={size} />;
          },
        }}
      />
    </Tabs>
    </NativeBaseProvider>
  );
};

export default TabsLayout;
