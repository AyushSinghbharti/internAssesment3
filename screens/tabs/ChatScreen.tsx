import React, { useContext, useReducer } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Header from "../components/TopView";
import ChatMessages from "../components/ChatMessages";
import CustomTextInput from "../components/CustomTextInput";
import { DataContext } from "../../DataContext";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

export default function ChatScreen() {
  const context = useContext(DataContext);
  const [dark, toggle] = useReducer((s) => !s, true);
  const colorMode = dark ? "dark" : "light";

  if (!context) {
    return <Text>Error: Data context is missing!</Text>;
  }

  const data = context.data;

  const Spacer = ({ height = 16 }) => <View style={{ height }} />;

  return data == null ? (
    <Pressable onPress={toggle} style={styles.container}>
      <MotiView
        transition={{
          type: "timing",
        }}
        style={[styles.container, styles.padded]}
        animate={{ backgroundColor: dark ? "#000000" : "#ffffff" }}
      >
        <Skeleton colorMode={colorMode} radius="round" height={75} width={75} />
        <Spacer />
        <Skeleton colorMode={colorMode} width={250} />
        <Spacer height={8} />
        <Skeleton colorMode={colorMode} width={"100%"} />
        <Spacer height={8} />
        <Skeleton colorMode={colorMode} width={"100%"} />
      </MotiView>
    </Pressable>
  ) : (
    <View style={styles.container}>
      {/* Header */}
      <Header dataHead={data} />

      {/* Message Section */}
      <ChatMessages chats={data} />

      {/* Input Section */}
      <CustomTextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F4",
  },
  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "white",
  },
  padded: {
    padding: 16,
  },
});
