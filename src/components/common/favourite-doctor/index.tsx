import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SectionHeading from "../../reuseble/section-heading";
import Doctors from "../doctors";
import { useRouter } from "expo-router";

export default function FavouriteDoctor() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <SectionHeading
        title="Top Doctors"
        onPress={() => router.push("/doctor-list")}
      />
      <Doctors />
    </View>
  );
}
