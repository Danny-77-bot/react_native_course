import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileCard(props: any) {

  return (
    <View style={styles.card}>

      <Image
        source={{
          uri: props.image,
        }}
        style={styles.image}
      />

      <Text style={styles.name}>
        {props.name}
      </Text>

      <Text style={styles.job}>
        {props.job}
      </Text>
        <Text style={styles.country}>
        {props. country}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },

  job: {
    color: "gray",
    marginTop: 5,
  },
  country:{
  color: "#333",        // or "gray", "#666", etc.
  marginTop: 5,
  fontSize: 16,
  } 

});