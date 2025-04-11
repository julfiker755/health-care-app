import { View, StyleSheet, Text } from "react-native";
import React, { useCallback, useEffect } from "react";
import Searchber from "@/src/components/common/search";
import { colors } from "@/src/constants/Colors";
import { useNavigation } from "expo-router";

export default function SearchScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const onChange = useCallback((text: string) => {
    console.log(text);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchber onChangeText={onChange} />
      </View>
      <View style={styles.subContainer}>
        <Text style={{ fontWeight: 600 }}>Recents Search</Text>
        <Text style={styles.clearButton}>Clear</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchContainer: {
    backgroundColor: colors.primary,
    height: 65,
  },
  subContainer: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  clearButton: {
    color: colors.primary,
    fontWeight: 600,
  },
});
