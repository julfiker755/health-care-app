import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import Button from "../components/reuseble/Button";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/splash.png")}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View
          style={{
            flex: 0.6,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 120,
          }}
        >
          <Image
            source={require("../assets/images/doctor.png")}
            style={{ width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flex: 0.4,
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: "bold",
                paddingVertical: 10,
                textAlign: "center",
              }}
            >
              More Comfortable Chat
              {`\n`} With the Doctor
            </Text>
            <Text
              style={{
                fontSize: 18,
                paddingVertical: 10,
                textAlign: "center",
                color: "gray",
                paddingHorizontal: 10,
              }}
            >
              Book an appointment with doctor. Chat with doctor via appointment
              letter and get consultation.
            </Text>
          </View>
          <View style={{ alignItems: "center", marginBottom: 50 }}>
            <Button onPress={() => router.push("/login")}>Get Started</Button>
          </View>
          o
        </View>
      </ImageBackground>
    </View>
  );
}
