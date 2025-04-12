import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { doctorImg } from "@/src/components/dummy-data/doctor";
import { useNavigation, useRouter } from "expo-router";
import userImg from "@/src/assets/images/users.png";
import trendImg from "@/src/assets/images/trend.png";
import ratingImg from "@/src/assets/images/rating.png";
import chatImg from "@/src/assets/images/chat.png";
import Button from "@/src/components/reuseble/Button";

export default function DoctorDetails() {
  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: "Doctor Profile",
    });
  }, [navigation]);
  const metrisDoctor = [
    {
      title: "Patients",
      label: "120+",
      icon: userImg,
    },
    {
      title: "Years Exp",
      label: "7+",
      icon: trendImg,
    },
    {
      title: "Rating",
      label: "4.9",
      icon: ratingImg,
    },
    {
      title: "Reviews",
      label: "100+",
      icon: chatImg,
    },
  ];
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity>
        <Image source={{ uri: doctorImg }} style={styles.image} />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.nameText}>Dr Jenny Wislson</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../assets/images/star.png")}
              style={{ width: 20, height: 20, marginRight: 2 }}
            />
            <Text style={{ fontSize: 18 }}>5.7</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 16, color: "gray" }}>
            Neurologist | Vcare Clinic
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingVertical: 30,
          paddingHorizontal: 10,
        }}
      >
        {metrisDoctor.map((item, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <View
              style={{
                borderRadius: 50,
                backgroundColor: "#EDEDFC",
                padding: 10,
              }}
            >
              <Image
                source={item.icon}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
            <Text style={{ fontWeight: "600" }}>{item.label}</Text>
            <Text style={{ fontWeight: "600" }}>{item.title}</Text>
          </View>
        ))}
      </View>
      <View style={{ paddingHorizontal: 10, paddingVertical: 30 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>About Me</Text>
        <Text style={{ color: "gray" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id optio
          dicta ea at architecto molestiae aliquid maxime quis fuga ipsam.
        </Text>
      </View>
      <View>
        <Button
          onPress={() => router.push("/appointment")}
          label="Book an Appointment"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  cardContainer: {
    borderRadius: 10,
    marginBottom: 8,
    width: "100%",
    overflow: "hidden",
    padding: 8,
  },
  image: {
    width: "100%",
    height: 280,
    borderRadius: 8,
    marginBottom: 8,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
