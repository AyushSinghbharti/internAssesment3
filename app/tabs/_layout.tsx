import React from "react";
import { Stack } from "expo-router";
import { DataProvider } from "../../DataContext";

const Layout = () => {
  return (
    <DataProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f9f9f9",
          },
          headerTintColor: "#333",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Homepage"
          options={{
            title: "index",
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          options={{
            title: "Chat",
            headerShown: false
          }}
        />
      </Stack>
    </DataProvider>
  );
};

export default Layout;
