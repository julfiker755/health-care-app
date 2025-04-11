import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "@/src/constants/Colors";
import { useRouter } from "expo-router";

export default function Header() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.img}
            source={require("../../../assets/images/avatar.png")}
          ></Image>
          <View style={styles.bio}>
            <Text style={styles.text}>Hello,Welcome ☄️</Text>
            <Text style={[styles.text, { paddingTop: 2, fontSize: 16 }]}>
              UserName
            </Text>
          </View>
        </View>
        <View style={styles.bellIcon}>
          <Image source={require("../../../assets/images/icon.png")} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/search-screen")}
        style={styles.searchber}
      >
        <Image
          style={styles.searchImage}
          source={require("../../../assets/images/search.png")}
        />
        <Text style={styles.searchText}>Search doctor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "22%",
    backgroundColor: colors.primary,
    justifyContent: "center",
  },
  profile: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    height: 48,
    backgroundColor: "gray",
    width: 48,
    borderRadius: 10,
    alignSelf: "center",
  },
  bio: {
    flexDirection: "column",
    paddingLeft: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  bellIcon: {
    alignSelf: "center",
  },
  searchber: {
    flexDirection: "row",
    borderWidth: 1,
    height: 45,
    borderRadius: 20,
    margin: 10,
    borderColor: "#EDEDFC",
  },
  searchImage: {
    alignSelf: "center",
    marginHorizontal: 10,
  },
  searchText: {
    alignSelf: "center",
    fontSize: 16,
    color: "#f0ebf8",
  },
});
