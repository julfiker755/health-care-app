import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { doctorImg } from "@/src/components/dummy-data/doctor";
import { useNavigation } from "expo-router";
import Input from "@/src/components/reuseble/Input";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/src/components/reuseble/Button";
import AppointmentSlot from "@/src/components/common/appointment-slot";

export default function Appointment() {
  const [isStep, setIsStep] = useState("step1");
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: "Appointment",
    });
  }, [navigation]);

  // Zod schema for form validation
  const schema = z.object({
    name: z.string().min(1, "name is required"),
    phone: z.string().min(1, "Phone is required"),
    age: z.string().min(1, "age is required"),
  });

  const from = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      age: "",
    },
  });

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log(data);
    setIsStep("step2");
  };
  return (
    <View style={{ padding: 8, backgroundColor: "white", flex: 1 }}>
      {isStep == "step1" && (
        <>
          <TouchableOpacity style={styles.container}>
            <Image source={{ uri: doctorImg }} style={styles.image} />
            <View style={{ paddingVertical: 6 }}>
              <Text style={styles.nameText}>Dr Jenny Wislson</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../assets/images/star.png")}
                  style={{ width: 15, height: 15, marginRight: 2 }}
                />
                <Text>5.7</Text>
              </View>
              <Text style={{ fontSize: 16, color: "gray" }}>Fee:130</Text>
            </View>
          </TouchableOpacity>
          <View style={{ paddingVertical: 30 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 10 }}>
              Appointment For
            </Text>
            <FormProvider {...from}>
              <View style={{ paddingVertical: 16, gap: 10 }}>
                <Input
                  style={{ paddingVertical: 8 }}
                  name="name"
                  placeholder="Patient Name"
                ></Input>
                <Input
                  style={{ paddingVertical: 8 }}
                  name="phone"
                  keyboardType="numeric"
                  placeholder="Contact Number"
                ></Input>
                <Input
                  style={{ paddingVertical: 8 }}
                  name="age"
                  keyboardType="numeric"
                  placeholder="Age"
                ></Input>
                <Button
                  label="Next"
                  style={{ height: 40 }}
                  onPress={from.handleSubmit(onSubmit)}
                ></Button>
              </View>
            </FormProvider>
          </View>
        </>
      )}
      {isStep == "step2" && <AppointmentSlot />}
    </View>
  );
}

const cardWidth = (Dimensions.get("window").width - 24) / 2;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 7,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    padding: 4,
  },
  cardContainer: {
    borderRadius: 10,
    marginBottom: 8,
    width: cardWidth,
    flex: 1,
    padding: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
