import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { useState } from "react";

export default function HomeScreen() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode
            ? "#111"
            : "#fff",
        },
      ]}
    >

      <Text
        style={{
          color: darkMode
            ? "white"
            : "black",

          fontSize: 25,
        }}
      >
        Dark Mode Example
      </Text>

      <Pressable
        style={styles.button}
        onPress={() =>
          setDarkMode(!darkMode)
        }
      >
        <Text style={styles.buttonText}>
          Toggle Theme
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "purple",
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },

});