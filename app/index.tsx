import { useEffect } from 'react';
import { DataProvider } from "../DataContext";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Redirect } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'Mulish-Bold': require('../assets/fonts/Mulish/Mulish-Bold.ttf'),
    'Mulish-Regular': require('../assets/fonts/Mulish/Mulish-Regular.ttf'),
    'Mulish-ExtraBold': require('../assets/fonts/Mulish/Mulish-ExtraBold.ttf'),
    'Mulish-SemiBold': require('../assets/fonts/Mulish/Mulish-SemiBold.ttf'),
    'Mulish-ExtraLight': require('../assets/fonts/Mulish/Mulish-ExtraLight.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <DataProvider>
      {/* <HomePage /> */}
      <Redirect href={"./tabs"} />
    </DataProvider>
  );
}