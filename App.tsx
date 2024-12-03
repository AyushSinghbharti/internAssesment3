import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatScreen from './screens/tabs/ChatScreen';
import { DataProvider } from './DataContext';

export default function App() {
  return (
    <DataProvider>
      <View style={styles.container}>
        <ChatScreen />
      </View>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F4',
  },
});
