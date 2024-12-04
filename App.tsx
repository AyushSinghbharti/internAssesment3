import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ChatScreen from './screens/tabs/ChatScreen';
import { DataProvider } from './DataContext';
import { FontProvider } from './CustomText';
import HomeScreen from './screens/tabs/HomeScreen';

export default function App() {
  return (
    <FontProvider>
      <DataProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <ChatScreen />
          {/* <HomeScreen /> */}
        </View>
      </DataProvider>
    </FontProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F4',
  },
});