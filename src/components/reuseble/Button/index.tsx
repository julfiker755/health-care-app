import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import React, { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  style?: any;
  label?: string;
}

export default function Button({
  children,
  onPress,
  style,
  label,
}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {label && <Text style={styles.text}>{label}</Text>}
      {children && children}
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
    margin: "auto",
  },
  text: {
    color: "white",
    fontSize: 22,
  },
});
