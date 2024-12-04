import React, {
  useState,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import FileSelector from "../modalComponents/FileSelector";

export default function CustomTextInput() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleBubbleIcon = () => {
    console.log("Icon Pressed");
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.input}>
        <TextInput
          style={{ flex: 1, fontFamily: "Mulish-Regular" }}
          placeholder="Reply to @Rohit Yadav"
          placeholderTextColor="#aaa"
        />

        <View style={{ position: "relative" }}>
          <View style={{ position: "relative" }}>
            {modalVisible && (
              <FileSelector />
            )}
          </View>
          <Feather
            name="paperclip"
            size={28}
            color="black"
            onPress={handleBubbleIcon}
          />
        </View>
        <Ionicons name="send" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    marginBottom: 2,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 0.1,
  },
});
