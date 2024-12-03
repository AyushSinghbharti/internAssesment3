// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import ChatScreen from './screens/tabs/ChatScreen';
// import { DataProvider } from './DataContext';

// export default function App() {
//   return (
//     <DataProvider>
//       <View style={styles.container}>
//         <ChatScreen />
//       </View>
//     </DataProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FAF9F4',
//   },
// });

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ChatScreen from './screens/tabs/ChatScreen';
import { DataProvider } from './DataContext';
import { FontProvider } from './CustomText';

export default function App() {
  return (
    <FontProvider>
      <DataProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <ChatScreen />
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