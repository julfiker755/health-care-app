import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { useForm, FormProvider } from "react-hook-form";
import Input from "@/src/components/reuseble/Input";
import Button from "@/src/components/reuseble/Button";

export default function Login() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

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
            justifyContent: "space-between",
            padding: 20,
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
          <FormProvider {...methods}>
            <Input
              label="First Name"
              name="firstName"
              placeholder="Enter your first name"
            />
            <Input
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
            />
          </FormProvider>
          <View style={{ alignItems: "center", marginBottom: 50 }}>
            <Button onPress={handleSubmit(onSubmit)}>Sign In</Button>
          </View>
        </View>
      </View>
    </View>
  );
}
