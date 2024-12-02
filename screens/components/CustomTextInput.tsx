import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  useWindowDimensions,
} from "react-native";
import {
  Feather,
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import FileSelector from "../modalComponents/FileSelector";

export default function CustomTextInput() {
  const [modalVisible, setModalVisible] = useState(false);
  const [postion, setPosition] = useState({ x: 100, y: 200 });
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.measure((x, y, width, height, pageX, pageY) => {
        setPosition({ x: pageX, y: y });
        console.log("Measured:", { x, y, pageX, pageY });
      });
    }
  }, [modalVisible]);

  const handleBubbleIcon = () => {
    console.log("Icon Pressed");
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.inputContainer}>
      <Modal
        animationType="fade"
        statusBarTranslucent={true}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View
            style={{
              position: "absolute",
              bottom: 360 % (360 - postion.x),
              right: postion.y,
            }}
          >
            <FileSelector />
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={styles.input}>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Reply to @Rohit Yadav"
          placeholderTextColor="#aaa"
        />
        <View ref={myRef}>
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
