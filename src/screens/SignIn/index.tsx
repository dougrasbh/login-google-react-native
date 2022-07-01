import React from "react";
import { View, Text, Image, StatusBar } from "react-native";

import { Button } from "../../components/Button";

import { styles } from "./styles";
import { useAuthContext } from "../../hooks/useAuthContext";

export function SignIn() {
  const { signIn } = useAuthContext();

  async function handleSignIn(): Promise<void> {
    try {
      await signIn();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" translucent />
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require("../../assets/background2.png")}
        />
        <View style={styles.content}>
          <Image
            style={styles.ueaLogo}
            source={require("../../assets/uea-horizontal.png")}
          />
          <Text style={styles.subtitle}>
            AGORA COMER NO RESTAURANTE {"\n"}
            UNIVERSITÁRIO DA UEA FICOU MAIS FÁCIL
          </Text>
          <Button
            title="Entrar com Google"
            icon="social-google"
            onPress={handleSignIn}
          />
          <Text style={styles.doubtText}>
            Dúvidas? Entre em contato com o {"\n"}
            departamento do seu curso
          </Text>
        </View>
      </View>
    </>
  );
}
