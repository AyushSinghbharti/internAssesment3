import React, { useRef, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import Data, { Chat } from "../../assets/interface/interface";
import { DataContext } from "../../DataContext";
import { MotiView } from "moti";

function RenderChat({ chats, index }: { chats: Chat | null; index: number }) {
  const context = useContext(DataContext);
  const userId = context?.userId;

  return (
    <>
      {chats === null ? (
        <RenderDate
          date={`${new Date()
            .getDate()
            .toString()
            .padStart(2, "0")} ${new Date().toLocaleString("default", {
            month: "short",
          })}, ${new Date().getFullYear()}`}
        />
      ) : userId === chats.sender.user_id ? (
        <MotiView
          from={{ translateY: 50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: "timing", duration: index * 250 }}
          style={styles.sentMessage}
        >
          <Text style={styles.messageTextRec}>{chats.message}</Text>
        </MotiView>
      ) : (
        <MotiView
          from={{ translateY: 50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: "timing", duration: index * 250 }}
          style={{ flexDirection: "row", gap: 8 }}
        >
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
        </MotiView>
      )}
    </>
  );
}

function RenderDate({ date }: { date: string }) {
  return (
    <View style={styles.timeBox}>
      <View style={styles.timeLine} />
      <Text style={styles.time}>{date}</Text>
      <View style={styles.timeLine} />
    </View>
  );
}

export default function ChatMessages({ chats }: { chats: Data }) {
  return (
    <View style={[styles.messagesContainer, { flex: 1 }]}>
      <FlatList
        data={[...chats.chats, null]}
        renderItem={({ item, index }) => (
          <RenderChat chats={item} index={index} />
        )}
        keyExtractor={(item) => item?.id || "date"}
        inverted
        contentContainerStyle={styles.messagesContent}
      />
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
    fontFamily: "Mulish-ExtraBold",
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
    fontFamily: "Mulish-Regular",
  },
  messageTextRec: {
    fontFamily: "Mulish-Regular",
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
