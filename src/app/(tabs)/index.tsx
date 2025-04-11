import { StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";
import { Image } from "expo-image";
import { colors } from "@/src/constants/Colors";
import Header from "@/src/components/common/header";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "25%",
    backgroundColor: colors.primary,
  },
});
