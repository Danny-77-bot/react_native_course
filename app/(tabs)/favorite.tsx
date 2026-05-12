import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { useState } from "react";

export default function HomeScreen() {

  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>

      <Pressable
        style={styles.button}
        onPress={() => setLiked(!liked)}
      >
        <Text style={styles.text}>
          {liked ? "❤️ Liked" : "🤍 Like"}
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
    backgroundColor: "#222",
    padding: 20,
    borderRadius: 12,
  },

  text: {
    color: "white",
    fontSize: 22,
  },

});