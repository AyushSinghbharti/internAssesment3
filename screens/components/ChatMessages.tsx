import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function ChatMessages() {
  return (
    <View style={{ flex: 1}}>
      <ScrollView
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
        // inverted
      >
        {/* Received Message */}
        <View style={styles.receivedMessage}>
          <Text style={styles.messageText}>
            Connect with fellow travelers, share the ride and save money.
          </Text>
        </View>

        {/* Sent Message */}
        <View style={styles.sentMessage}>
          <Text style={styles.messageText}>
            Connect with fellow travelers, share the ride and save money.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
    padding: 16,
  },
  receivedMessage: {
    alignSelf: "flex-start",
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
});