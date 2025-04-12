import { StyleSheet } from "react-native";
import { View } from "@/src/components/Themed";
import { colors } from "@/src/constants/Colors";
import Header from "@/src/components/common/header";
import Categories from "@/src/components/common/categories";
import FavouriteDoctor from "@/src/components/common/favourite-doctor";
import Doctors from "@/src/components/common/doctors";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <Categories />
      <FavouriteDoctor />
      <Doctors />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "25%",
    backgroundColor: colors.primary,
  },
});
