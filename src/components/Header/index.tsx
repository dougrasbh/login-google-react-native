import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { useAuthContext } from "../../hooks/useAuthContext";

type Props = TouchableOpacityProps & {
  headerTitle: string;
};

export function Header({ headerTitle, ...rest }: Props) {
  const { signOut } = useAuthContext();

  function handleSignOut(): void {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{headerTitle}</Text>
      <TouchableOpacity style={styles.logOutButton} onPress={handleSignOut} {...rest}>
        <FontAwesome name="power-off" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
