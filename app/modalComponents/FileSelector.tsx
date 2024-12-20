import React from "react";
import { View, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { MotiView } from "moti";
export default function FileSelector() {
  return (
    <>
      <MotiView
        from={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "timing", duration: 500 }}
        style={{
          position: "absolute",
          zIndex: 1,
          top: -70,
          left: -65,
          alignItems: "center",
          justifyContent: "center",
          width: 150,
        }}
      >
        <View style={styles.bubble}>
          <Feather name="camera" size={24} color="white" />
          <Feather name="video" size={24} color="white" />
          <Ionicons name="document-outline" size={24} color="white" />
        </View>
        <View style={styles.arrow} />
      </MotiView>
    </>
  );
}

const styles = StyleSheet.create({
  bubble: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#008000",
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 16,
    borderRadius: 999,
    elevation: 2,
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#008000",
    position: "absolute",
    bottom: -9,
    right: 60,
  },
});
