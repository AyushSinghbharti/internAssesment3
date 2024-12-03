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
import CustomTextInput from "../components/CustomTextInput";
import data from "../../assets/data/data.json";
import Data from "../../assets/interface/interface";

export default function ChatScreen() {
  // console.log(data.from);
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header dataHead={data} />

      {/* Message Section */}
      <ChatMessages />

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