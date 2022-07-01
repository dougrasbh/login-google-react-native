import "react-native-gesture-handler";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from "react-native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Routes } from "./src/routes";
import { View } from "react-native";
import { theme } from "./src/styles/theme";
import { AuthProvider } from "./src/contexts/AuthContext";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  useCallback(async () => {
    if (fontsLoaded) {
     await SplashScreen.preventAutoHideAsync();
    }
   }, [fontsLoaded]);

    if (!fontsLoaded) {
      return null
    }

  return (
    <AuthProvider>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
        }}
      >
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <Routes />
      </View>
    </AuthProvider>
  );
}
