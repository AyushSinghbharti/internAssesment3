import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { Feather, Ionicons, Octicons } from "@expo/vector-icons";
import Data from "../../assets/interface/interface";
import { useRouter } from "expo-router";

export default function Header({ dataHead }: { dataHead: Data }) {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.tripTitle}>{dataHead.name}</Text>
        <Feather name="edit" size={24} color="black" />
      </View>

      <View style={styles.tripDetails}>
        <View style={styles.profilePicWrapper}>
          {(() => {
            const uniqueDps = [
              ...new Set(dataHead.chats.map((chat) => chat.sender.image)),
            ];

            while (uniqueDps.length < 4) {
              uniqueDps.push(uniqueDps[uniqueDps.length - 1]);
            }

            return uniqueDps.map((uri, index) => (
              <Image key={index} style={styles.profilePic} source={{ uri }} />
            ));
          })()}
        </View>

        <Text style={styles.tripSubtitle}>
          <Text style={styles.locationDetail}>
            From <Text style={styles.locationHeading}>{dataHead.from}</Text>
            {"\n"}
          </Text>
          <Text style={styles.locationDetail}>
            To <Text style={styles.locationHeading}>{dataHead.to}</Text>
          </Text>
        </Text>
        <View>
          <TouchableOpacity>
            <Ionicons
              name="ellipsis-vertical"
              size={24}
              color="black"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </TouchableOpacity>

          {modalVisible && (
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.tabBox}>
                <View style={styles.tabOptions}>
                  <Octicons name="people" size={20} color="black" />
                  <Text style={styles.tabText}>Members</Text>
                </View>
                <View style={styles.tabOptions}>
                  <Feather name="phone" size={24} color="black" />
                  <Text style={styles.tabText}>Share Number</Text>
                </View>
                <View style={styles.tabOptions}>
                  <Octicons name="report" size={20} color="black" />
                  <Text style={styles.tabText}>Report</Text>
                </View>
              </View>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // marginTop: StatusBar.currentHeight,
    // paddingTop: 20,
    padding: 16,
    backgroundColor: "#FAF9F4",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E0",
    gap: 16,
  },
  headerTop: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  tripTitle: {
    flex: 1,
    fontSize: 24,
    fontFamily: "Mulish-ExtraBold",
    color: "#333",
  },
  tripDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  profilePicWrapper: {
    width: 50,
    overflow: "hidden",
    borderRadius: 50,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    height: 25,
    width: 25,
  },
  tripSubtitle: {
    color: "#777",
    flex: 1,
    fontFamily: "Mulish-Regular",
  },
  locationDetail: {
    fontSize: 16,
    color: "#777",
    lineHeight: 20,
  },
  locationHeading: {
    fontSize: 18,
    fontFamily: "Mulish-ExtraBold",
    color: "#333",
    lineHeight: 22,
  },
  tabBox: {
    width: 153,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 2,
    position: "absolute",
    top: 20,
    right: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
  tabOptions: {
    gap: 10,
    height: 44,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: "#E5E5E0",
  },
  tabText: {
    fontSize: 14,
    fontFamily: "Mulish-SemiBold",
  },
});
