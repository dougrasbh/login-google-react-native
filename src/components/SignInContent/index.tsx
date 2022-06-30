import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function SignInContent() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>UEA</Text>
        <Text style={styles.subtitle}>
          AGORA COMER NO RESTAURANTE {"\n"}
          UNIVERSITÁRIO DA UEA FICOU MAIS FÁCIL
        </Text>
      </View>
    </View>
  );
}
