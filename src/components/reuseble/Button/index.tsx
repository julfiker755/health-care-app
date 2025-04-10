import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  style?: any;
}

export default function Button({ children, onPress, style }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0B3DA9",
    textAlign: "center",
    alignItems: "center",
    height: 48,
    justifyContent: "center",
    borderRadius: 10,
    width: "95%",
  },
  text: {
    color: "white",
    fontSize: 22,
  },
});
