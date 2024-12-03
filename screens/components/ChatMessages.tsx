import React, { useRef, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Data, { Chat } from "../../assets/interface/interface";
import { DataContext } from "../../DataContext";

function RenderChat({ chats }: { chats: Chat }) {
  const context = useContext(DataContext);
  const userId = context?.userId;

  return (
    <>
      {userId === chats.sender.user_id ? (
        // Sent Messages
        <View style={styles.sentMessage}>
          <Text style={styles.messageTextRec}>{chats.message}</Text>
        </View>
      ) : (
        // Received Message
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View style={styles.picView}>
            <Image
              style={styles.profilePic}
              source={{ uri: chats.sender.image }}
            />
            {chats.sender.is_kyc_verified ? (
              <Image
                style={styles.verificationSign}
                source={require("../../assets/verificationPic.png")}
              />
            ) : null}
          </View>
          <View style={styles.receivedMessage}>
            <Text style={styles.messageTextSent}>{chats.message}</Text>
          </View>
        </View>
      )}
    </>
  );
}

export default function ChatMessages({ chats }: { chats: Data }) {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: false });
  }, []);

  return (
    <View style={[styles.messagesContainer, { flex: 1 }]}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        <View style={styles.timeBox}>
          <View style={styles.timeLine} />
          <Text style={styles.time}>12 Jan, 2024</Text>
          <View style={styles.timeLine} />
        </View>
        {chats.chats.map((chat, index) => (
          <RenderChat key={index} chats={chat} />
        ))}
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
  timeBox: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  timeLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#B7B7B7",
  },
  time: {
    marginHorizontal: 10,
    color: "#B7B7B7",
    fontWeight: "bold",
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    elevation: 1,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: 8,
    borderTopStartRadius: 0,
    padding: 12,
    marginBottom: 8,
    maxWidth: "75%",
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#007bff",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    padding: 12,
    marginBottom: 8,
    maxWidth: "75%",
  },
  messageTextSent: {
    color: "#606060",
  },
  messageTextRec: {
    color: "#fff",
  },
  picView: {
    height: 30,
    width: 30,
  },
  profilePic: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  verificationSign: {
    height: 12,
    width: 12,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});