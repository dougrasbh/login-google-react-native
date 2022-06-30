import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  headerTitle: string;
};

export function Header({ headerTitle, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{headerTitle}</Text>
      <TouchableOpacity style={styles.logOutButton} {...rest}>
        <FontAwesome name="power-off" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
