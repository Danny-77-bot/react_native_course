import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.bio}>
        I am a MERN Full Stack Developer and Mobile App Developer specialized in React Native.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'flex-end', alignItems:'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  bio: { fontSize: 18, lineHeight: 26 },
});
