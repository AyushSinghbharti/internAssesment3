import React from "react";
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

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Message Section */}
      <ChatMessages />

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={28} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Reply to @Rohit Yadav"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity>
          <Ionicons name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F4",
  },
  tripDetails: {
    flex: 1,
    marginLeft: 12,
  },
  tripTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  tripSubtitle: {
    fontSize: 14,
    color: "#777",
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  receivedMessage: {
    alignSelf: "flex-start",
    // backgroundColor: "#f0f0f0",
    backgroundColor: "green",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    maxWidth: "75%",
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#007bff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    maxWidth: "75%",
  },
  messageText: {
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#eaeaea",
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    backgroundColor: "#f8f8f8",
    color: "#333",
  },
});