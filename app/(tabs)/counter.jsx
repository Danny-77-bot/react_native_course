import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.number}>
        {count}
      </Text>

      <Button
        title="Increase"
        onPress={() => setCount(count + 1)}
      />

      <Button
  title="Decrease"
  onPress={() => setCount(count - 1)}
/>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  number: {
    fontSize: 50,
    marginBottom: 20,
  },

});