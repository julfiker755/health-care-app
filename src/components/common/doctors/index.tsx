import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { doctors } from "../../dummy-data/doctor";

export default function Doctors() {
  return (
    <View style={styles.container}>
      <FlatList
        data={doctors}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cardContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const cardWidth = (Dimensions.get("window").width - 10 * 3) / 2;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  cardContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
    width: cardWidth,
  },
  image: {
    width: "100%",
    height: "48%",
    borderRadius: 5,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
