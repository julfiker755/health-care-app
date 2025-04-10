import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { useForm, FormProvider } from "react-hook-form";
import Input from "@/src/components/reuseble/Input";
import Button from "@/src/components/reuseble/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function Login() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // Zod schema for form validation
  const schema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
  });

  const from = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log("Form data submitted: ", data);
    // Replace console log with actual login logic
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#0B3DA9",
        }}
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
            source={require("../../assets/images/facility.png")}
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
            justifyContent: "center",
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
              Log in or sign up
            </Text>
          </View>
          <FormProvider {...from}>
            <Input
              style={{
                paddingVertical: 10,
              }}
              name="phone"
              placeholder="Enter your phone"
            />
            <View
              style={{
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Button
                label="Sign In"
                style={{ height: 40 }}
                onPress={from.handleSubmit(onSubmit)}
              ></Button>
            </View>
          </FormProvider>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Button
              style={{
                height: 40,
                flexDirection: "row",
                gap: 2,
                backgroundColor: "white",
                borderWidth: 1,
                borderRadius: 4,
                borderCurve: "continuous",
                borderColor: "#e0e0e0",
              }}
            >
              <Image source={require("../../assets/images/google_icon.png")} />
              <Text style={{ marginLeft: 2, fontSize: 16 }}>
                Contiune width google
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
