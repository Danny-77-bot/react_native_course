import { ScrollView, StyleSheet } from "react-native";
import ProfileCard from "../components/profileCard";


export default function HomeScreen() {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <ProfileCard
        name="Daniel Melaku"
        job="React Native Developer"
        image="https://i.pravatar.cc/300?img=1"
        country="Mexico"
      />

      <ProfileCard
        name="John Doe"
        job="UI/UX Designer"
        image="https://i.pravatar.cc/300?img=2"
        country="America"
      />

      <ProfileCard
        name="Sara Smith"
        job="Backend Developer"
        image="https://i.pravatar.cc/300?img=3"
        country="England"
      />

       <ProfileCard
        name="Solomon"
        job="Prompt Engineer"
        image="https://i.pravatar.cc/300?img=3"
        country="Ethiopia"
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