import React, { useContext } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Pressable } from "react-native";
import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Trip = {
  id: string;
  from: string;
  to: string;
  date: string;
};

const HomePage = () => {
  const router = useRouter();

  const trips: Trip[] = [
    {
      id: "1",
      from: "IGI Airport, T3",
      to: "Sector 28",
      date: "12th Jan, 2024",
    },
    {
      id: "2",
      from: "Noida City Center",
      to: "Connaught Place",
      date: "14th Jan, 2024",
    },
    {
      id: "3",
      from: "Agra Form",
      to: "Lucknow Junction",
      date: "14th Jan, 2024",
    },
    {
      id: "4",
      from: "Bihar Basti",
      to: "Hydrabad Resturant",
      date: "15th Jan, 2024",
    },
  ];

  const renderTrip = ({ item }: { item: Trip }) => (
    <Pressable style={styles.tripCard} onPress={() => router.push("/tabs/ChatScreen")}>
      <View style={styles.tripInfo}>
        <Text style={styles.tripTitle}>{item.from}</Text>
        <Ionicons name="arrow-forward" size={20} color="#555" />
        <Text style={styles.tripTitle}>{item.to}</Text>
      </View>
      <Text style={styles.tripDate}>{item.date}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="user" size={25} style={styles.profileImage} />
        <Text style={styles.appTitle}>My Rides</Text>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Upcoming Trips */}
      <Text style={styles.sectionTitle}>Upcoming Trips</Text>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        renderItem={renderTrip}
        style={styles.tripList}
      />

      {/* New Trip Button */}
      <TouchableOpacity style={styles.newTripButton}>
        <Ionicons name="add-circle" size={24} color="#fff" />
        <Text style={styles.newTripText}>Start a New Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F4",
  },
  header: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E0",
  },
  profileImage: {
    borderWidth: 1,
    borderRadius: 20,
  },
  appTitle: {
    fontSize: 18,
    fontFamily: "Mulish-ExtraBold",
    flex: 1,
    textAlign: "center",
  },
  sectionTitle: {
    padding: 16,
    fontSize: 16,
    fontFamily: "Mulish-Bold",
    color: "#333",
  },
  tripList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  tripCard: {
    padding: 16,
    backgroundColor: "white",
    elevation: 2,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    marginVertical: 8,
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  tripInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    gap: 5,
  },
  tripTitle: {
    fontSize: 14,
    fontFamily: "Mulish-Bold",
    color: "#333",
  },
  tripDate: {
    fontSize: 12,
    fontFamily: "Mulish-Regular",
    color: "#777",
  },
  newTripButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007aff",
    padding: 12,
    margin: 16,
    borderRadius: 8,
  },
  newTripText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Mulish-ExtraLight",
    marginLeft: 8,
  },
});

export default HomePage;