import "react-native-gesture-handler";
import { useCallback } from "react";

import React from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from "expo-app-loading";
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

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
     await SplashScreen.hideAsync();
    }
   }, [fontsLoaded]);

    if (!fontsLoaded) {
      return <AppLoading />;
    }

  return (
    <AuthProvider>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
        }}
        onLayout={onLayoutRootView}
      >
        <StatusBar style="light" backgroundColor="transparent" translucent />

        <Routes />
      </View>
    </AuthProvider>
  );
}
