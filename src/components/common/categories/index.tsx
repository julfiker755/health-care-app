import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { categoriesItem } from "../../dummy-data/categorie";
import { colors } from "@/src/constants/Colors";

export default function Categories() {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <View>
      <FlatList
        data={categoriesItem}
        horizontal={true}
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => setIsSelected(index)}
            style={[
              styles.categorieItem,
              isSelected === index ? { backgroundColor: colors.primary } : {},
            ]}
            key={index}
          >
            <Text style={isSelected === index && { color: "white" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
    margin: 8,
  },
  categorieItem: {
    backgroundColor: "#E9E9FE",
    padding: 10,
    borderRadius: 8,
    alignSelf: "center",
  },
});
