import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  Modal,
} from "react-native";
import { Feather, Ionicons, Octicons } from "@expo/vector-icons";

export default function Header() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.header}>
      <Modal
        animationType="slide"
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
        </TouchableOpacity>
      </Modal>

      <View style={styles.headerTop}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.tripTitle}>Trip 1</Text>
        <Feather name="edit" size={24} color="black" />
      </View>

      <View style={styles.tripDetails}>
        <View style={styles.profilePicWrapper}>
          <Image
            style={styles.profilePic}
            source={{ uri: "https://picsum.photos/id/237/250" }}
          />
          <Image
            style={styles.profilePic}
            source={{ uri: "https://picsum.photos/id/237/250" }}
          />
          <Image
            style={styles.profilePic}
            source={{ uri: "https://picsum.photos/id/237/250" }}
          />
          <Image
            style={styles.profilePic}
            source={{ uri: "https://picsum.photos/id/237/250" }}
          />
        </View>

        <Text style={styles.tripSubtitle}>
          <Text style={styles.locationDetail}>
            From{" "}
            <Text style={styles.locationHeading}>IGI Airport, sector T3</Text>
            {"\n"}
          </Text>
          <Text style={styles.locationDetail}>
            To <Text style={styles.locationHeading}>sector 28</Text>
          </Text>
        </Text>
        <TouchableOpacity>
          <Ionicons
            name="ellipsis-vertical"
            size={24}
            color="black"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // alignItems: "center",
    justifyContent: "space-between",
    marginTop: StatusBar.currentHeight,
    paddingTop: 20,
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
    fontWeight: "bold",
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
  },
  locationDetail: {
    fontSize: 16,
    color: "#777",
    lineHeight: 20,
  },
  locationHeading: {
    fontSize: 18,
    fontWeight: "800",
    color: "#333",
    lineHeight: 22,
  },
  tabBox: {
    width: 153,
    marginTop: 25,
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 2,
    position: 'absolute',
    top: 120,
    right: 10,
  },
  tabOptions: {
    gap: 10,
    height: 44,
    alignItems: 'center',
    flexDirection: "row",
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: "#E5E5E0",
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
