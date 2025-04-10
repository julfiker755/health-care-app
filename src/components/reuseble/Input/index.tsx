import { Text, View, TextInput } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import React from "react";

interface inputProps {
  label: string;
  name: string;
  placeholder?: string;
}

export default function Input({ label, name, placeholder }: inputProps) {
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
          {label && (
            <Text style={{ fontSize: 20, marginBottom: 4, fontWeight: "500" }}>
              {label}
            </Text>
          )}
          <TextInput
            style={{
              borderWidth: 1,
              padding: 5,
              borderRadius: 3,
              fontSize: 16,
              borderColor: '#2E363F"',
              borderCurve: "continuous",
            }}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
          {error?.message && <Text>{error?.message}</Text>}
        </View>
      )}
    />
  );
}
