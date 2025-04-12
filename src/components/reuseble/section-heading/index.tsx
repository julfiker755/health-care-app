import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "@/src/constants/Colors";

type sectionHeadingProps = {
  title: string;
  onPress?: () => void;
};

export default function SectionHeading({
  title,
  onPress,
}: sectionHeadingProps) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.textButton}>See all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textButton: {
    color: colors.primary,
  },
});
