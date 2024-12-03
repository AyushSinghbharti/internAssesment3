import React, { useState, useEffect } from 'react';
import { Text, TextProps } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Optional: Custom Text component with default Mulish font
export const CustomText = (props: TextProps) => {
  return (
    <Text 
      {...props} 
      style={[
        { fontFamily: 'Mulish-Regular' }, 
        props.style
      ]}
    />
  );
};

// Font Provider component
export const FontProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          'Mulish-Regular': require('./assets/fonts/Mulish/Mulish-Regular.ttf'),
          'Mulish-Bold': require('./assets/fonts/Mulish/Mulish-Bold.ttf'),
          'Mulish-Light': require('./assets/fonts/Mulish/Mulish-ExtraLight.ttf'),
          'Mulish-SemiBold': require('./assets/fonts/Mulish/Mulish-SemiBold.ttf'),
          'Mulish-ExtraBold': require('./assets/fonts/Mulish/Mulish-ExtraBold.ttf'),
        });

        setFontsLoaded(true);
      } catch (error) {
        console.warn('Error loading fonts:', error);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  
  Text.defaultProps = {
    ...Text.defaultProps,
    style: [
      Text.defaultProps?.style,
      { fontFamily: 'Mulish-Regular' }
    ]
  };

  return <>{children}</>;
};