import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Image
          source={require('../assets/images/profile.jpg')} 
          style={styles.image}
        />

        <Text style={styles.name}>
          Daniel Melaku
        </Text>

        <Text style={styles.job}>
          MERN & React Native Developer
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
  },

  job: {
    fontSize: 16,
    color: "gray",
    marginTop: 5,
  },

});