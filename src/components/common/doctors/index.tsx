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
import { useRouter } from "expo-router";

export default function Doctors() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <FlatList
        data={doctors}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push("/doctor-details")}
            style={styles.cardContainer}
          >
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
              <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 2 }}>
                <Image source={require("../../../assets/images/star.png")} />
                <Text>{item.rating}</Text>
              </View>
            </View>
            <View>
              <Text>Fee:{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const cardWidth = (Dimensions.get("window").width - 16 * 3) / 2;

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
    height: "52%",
    borderRadius: 5,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 3,
  },
});
