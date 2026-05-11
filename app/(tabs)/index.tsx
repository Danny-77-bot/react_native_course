import { ScrollView, StyleSheet } from "react-native";
import ProfileCard from "../components/profileCard";


export default function HomeScreen() {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <ProfileCard
        name="Daniel Melaku"
        job="React Native Developer"
        image="https://i.pravatar.cc/300?img=1"
      />

      <ProfileCard
        name="John Doe"
        job="UI/UX Designer"
        image="https://i.pravatar.cc/300?img=2"
      />

      <ProfileCard
        name="Sara Smith"
        job="Backend Developer"
        image="https://i.pravatar.cc/300?img=3"
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 20,
    backgroundColor: "#ddd",
  },

});