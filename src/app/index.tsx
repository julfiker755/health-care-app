import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import Button from "../components/reuseble/Button";

export default function Home() {
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
              style={{ fontSize: 24, fontWeight: "bold", paddingVertical: 10 }}
            >
              Welcome to Medikart
            </Text>
            <Text
              style={{
                fontSize: 18,
                paddingVertical: 10,
                textAlign: "center",
                color: "gray",
              }}
            >
              Book appointments with your favourite doctor
            </Text>
          </View>

          <View style={{ alignItems: "center", marginBottom: 50 }}>
            <Button>Get Started</Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
