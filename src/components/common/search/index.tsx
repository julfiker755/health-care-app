import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

type SearchBarProps = {
  onChangeText: (text: string) => void;
};

export default function Searchber({ onChangeText }: SearchBarProps) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backbutton}>Back</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search Doctor..."
        clearButtonMode="always"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
    margin: 10,
    height: 48,
    alignItems: "center",
  },
  backbutton: {
    paddingHorizontal: 10,
  },
  input: {
    width: "85%",
  },
});
