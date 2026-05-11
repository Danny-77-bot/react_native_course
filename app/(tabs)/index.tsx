import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My Portfolio</Text>
      <Text style={styles.body}>Explore my journey as a developer.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 24, fontWeight: 'bold' },
  body: { fontSize: 16, marginTop: 10 },
});
