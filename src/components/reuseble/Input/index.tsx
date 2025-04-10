import { Text, View, TextInput, StyleSheet } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import React, { useState } from "react";

interface inputProps {
  label?: string;
  name: string;
  placeholder?: string;
  style?: any;
}

export default function Input({ label, name, placeholder, style }: inputProps) {
  const [borderColor, setBorderColor] = useState("#e0e0e0");
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: true,
      }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View>
          {label && <Text style={styles.label}>{label}</Text>}
          <TextInput
            style={[styles.input, { borderColor }, style]}
            placeholder={placeholder}
            onFocus={() => setBorderColor("#0e82fd")}
            onBlur={() => {
              setBorderColor("#e0e0e0");
              onBlur();
            }}
            onChangeText={onChange}
            value={value}
          />
          {error?.message && (
            <Text style={styles.errorText}>{error.message} </Text>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "500",
  },
  input: {
    width: "95%",
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
    fontSize: 16,
    borderCurve: "continuous",
    margin: "auto",
  },
  errorText: {
    color: "red",
    marginTop: 3,
    textAlign: "right",
  },
});
