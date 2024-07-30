import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        width: 200,
        height: 100,

        color: 'white',
        fontSize: 50,

        backgroundColor: '#339c53',
        borderRadius: 50,

        textAlign: 'center',
        textAlignVertical: 'center',
      }}>
        Start</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
