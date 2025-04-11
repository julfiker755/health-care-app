import { View, Text } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { OtpInput } from "react-native-otp-entry";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import Button from "@/src/components/reuseble/Button";

export default function OtpVarify() {
  const { num } = useLocalSearchParams();
  const [counter, setCounter] = useState(30);
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      title: "Verify OTP",
      // headerTitleAlign: "center",
    });
  }, [navigation]);

  const counDown = useCallback(() => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }, [counter]);
  useEffect(() => {
    const timer = setInterval(counDown, 1000);
    return () => clearInterval(timer);
  }, [counter]);
  const onTextChange = useCallback((text: string) => {
    // handle text change
    if (text?.length >= 6) {
      router.push("/(tabs)");
    }
  }, []);

  const onFilled = useCallback((text: string) => {
    // handle when OTP is filled
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>We've sent a varification code to</Text>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>{num}</Text>
      </View>
      <View style={{ margin: 20 }}>
        <OtpInput
          numberOfDigits={6}
          onTextChange={onTextChange}
          onFilled={onFilled}
        />
      </View>

      {counter > 0 && (
        <Text style={{ alignSelf: "center", marginTop: 10 }}>
          Resend OTP in {counter}s
        </Text>
      )}
      {counter === 0 && (
        <Button style={{ backgroundColor: "white" }}>
          <Text style={{ fontSize: 18, color: "#0B3DA9" }}>Resend</Text>
        </Button>
      )}
    </View>
  );
}
