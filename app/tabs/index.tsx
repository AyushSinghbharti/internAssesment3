import React, { useContext } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Pressable } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { DataContext } from "../../DataContext";

const HomePage = () => {
  const router = useRouter();
  const tempContext = useContext(DataContext);
  console.log("tempContext", tempContext);

  const trips = [
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
  ];

  const renderTrip = ({ item }: {}) => (
    <Pressable style={styles.tripCard} onPress={()=> router.push("/tabs/ChatScreen")}>
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
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/40" }} // Replace with profile image URL
          style={styles.profileImage}
        />
        <Text style={styles.appTitle}>My Rides</Text>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Upcoming Trips */}
      <Text style={styles.sectionTitle}>Upcoming Trips</Text>
      <FlatList
        data={trips}
        renderItem={renderTrip}
        keyExtractor={(item) => item.id}
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
    backgroundColor: "#fff",
  },
  header: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  sectionTitle: {
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  tripList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  tripCard: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    marginVertical: 8,
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  tripInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  tripTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginHorizontal: 8,
  },
  tripDate: {
    fontSize: 12,
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
    marginLeft: 8,
  },
});

export default HomePage;