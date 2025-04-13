import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import dayjs from "dayjs";
import { Calendar } from "react-native-calendars";
import { colors } from "@/src/constants/Colors";
import SectionHeading from "../../reuseble/section-heading";
import Button from "../../reuseble/Button";
import ShowToast from "../../reuseble/toast";

// Generate time slots from 10:00 AM to 5:00 PM
const timeSlots = Array.from({ length: 8 }, (_, i) => {
  const hour = 10 + i;
  const isPM = hour >= 12;
  const formattedHour = hour > 12 ? hour - 12 : hour;
  return {
    time: `${formattedHour}:00 ${isPM ? "PM" : "AM"}`,
    value: `${hour}:00`,
  };
});

export default function AppointmentSlot() {
  const today = dayjs().format("YYYY-MM-DD");
  const maxDate = dayjs().add(14, "day").format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Calendar
        minDate={today}
        maxDate={maxDate}
        onDayPress={(day: any) => setSelectedDate(day?.dateString)}
        style={{ height: 330 }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: colors.primary,
            selectedTextColor: "white",
          },
        }}
        theme={{
          todayTextColor: colors.primary,
          selectedDayBackgroundColor: colors.primary,
          selectedDayTextColor: "white",
          arrowColor: colors.primary,
          monthTextColor: colors.primary,
          textMonthFontWeight: "bold",
          textDayFontWeight: "500",
        }}
      />

      <View>
        <SectionHeading title="Available Time Slot" />

        <FlatList
          data={timeSlots}
          style={{ padding: 10 }}
          contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          renderItem={({ item }) => {
            const isSelected = selectedSlot === item.value;
            return (
              <TouchableOpacity
                style={[
                  styles.slotCard,
                  isSelected && { backgroundColor: colors.primary },
                ]}
                onPress={() => setSelectedSlot(item.value)}
              >
                <Text
                  style={[styles.slotText, isSelected && { color: "white" }]}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Button
        onPress={() =>
          ShowToast({
            type: "success",
            title: "Thank You",
            text: "Your Appointment Successful",
          })
        }
        label="Set Appointment"
        style={{ height: 40 }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slotCard: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    minWidth: 90,
  },
  slotText: {
    fontWeight: "500",
    color: "#333",
  },
});
