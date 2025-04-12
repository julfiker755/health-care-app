import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { doctors } from "@/src/components/dummy-data/doctor";
import { useNavigation } from "expo-router";

export default function DoctorsList() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: "Doctor List",
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <FlatList
        data={doctors}
        numColumns={2}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ paddingBottom: 16 }}
        columnWrapperStyle={{ justifyContent: "space-between", rowGap: 8 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cardContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.nameText}>{item.name}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../assets/images/star.png")}
                  style={{ width: 14, height: 14, marginRight: 2 }}
                />
                <Text>{item.rating}</Text>
              </View>
            </View>
            <View>
              <Text>Fee: {item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const cardWidth = (Dimensions.get("window").width - 24) / 2;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  cardContainer: {
    borderRadius: 10,
    marginBottom: 8,
    width: cardWidth,
    overflow: "hidden",
    padding: 8,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
