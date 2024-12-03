import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/TopView";
import ChatMessages from "../components/ChatMessages";
import CustomTextInput from "../components/CustomTextInput";
import { DataContext } from "../../DataContext";

export default function ChatScreen() {
  const context = useContext(DataContext);

  if (!context) {
    return <Text>Error: Data context is missing!</Text>;
  }

  const data = context.data;

  return data == null ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Loading...
      </Text>
    </View>
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
});
