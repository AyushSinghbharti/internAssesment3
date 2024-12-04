import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/TopView";
import ChatMessages from "../components/ChatMessages";
import CustomTextInput from "../components/CustomTextInput";
import { DataContext } from "../../DataContext";
import LoaderComponet from "../components/LoaderComponent";
import { MotiView } from "moti";

export default function ChatScreen() {
  const context = useContext(DataContext);

  if (!context) {
    return <Text>Error: Data context is missing!</Text>;
  }

  const data = context.data;

  return data == null ? (
    <LoaderComponet />
  ) : (
    <View style={styles.container}>
      {/* Header */}
      <MotiView
        from={{ translateY: -50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "timing", duration: 700 }}
        style={{zIndex: 1}}
      >
        <Header dataHead={data} />
      </MotiView>

      {/* Message Section */}
      <ChatMessages chats={data} />

      {/* Input Section */}
      <MotiView
        from={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "timing", duration: 700 }}
      >
        <CustomTextInput />
      </MotiView>
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
