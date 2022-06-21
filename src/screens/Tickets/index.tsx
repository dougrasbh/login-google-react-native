import React from 'react';
import { 
  View, 
  Text, 
  StatusBar,
  ImageBackground } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components/Header';

export function Tickets() {

  return (
    <>
     <StatusBar
    barStyle='dark-content'
    translucent
    />
    <View style={styles.container}>
      <Header 
      headerTitle='Tickets'
       />
      <ImageBackground source={require('../../assets/back.png')}
      style={styles.background}></ImageBackground>
       <Text>Tickets Page</Text>
    </View>
    </>
  );
}