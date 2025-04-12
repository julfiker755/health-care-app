import { View } from "@/src/components/Themed";
import Header from "@/src/components/common/header";
import Categories from "@/src/components/common/categories";
import FavouriteDoctor from "@/src/components/common/favourite-doctor";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <Categories />
      <FavouriteDoctor />
    </View>
  );
}
