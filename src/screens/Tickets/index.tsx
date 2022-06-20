import React from 'react';
import { 
  View, 
  Text, 
  StatusBar,
  ImageBackground } from 'react-native';

import { styles } from './styles';

export function Tickets() {

  return (
    <>
     <StatusBar
    barStyle='dark-content'
    translucent
    />
    <View style={styles.container}>
      <Text>Tickets Page</Text>
      <ImageBackground source={require('../../assets/back.png')}
      style={styles.background}></ImageBackground>
    </View>
    </>
  );
}