import React from 'react';
import { View, Text} from 'react-native';

import { styles } from './styles';


type Props = {
  headerTitle: string
}

export function ProfileHeader({headerTitle}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{headerTitle}</Text>
    </View>
  );
}