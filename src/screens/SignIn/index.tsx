import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';

import * as AuthSession from 'expo-auth-session';

const { CLIENT_ID } = process.env
const { REDIRECT_ID } = process.env

import { styles } from './styles';

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  }
}

export function SignIn() {
  const navigation = useNavigation();

  async function handleSignIn() {
    
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email')

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_ID}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
    const { type, params } = await AuthSession
    .startAsync({ authUrl }) as AuthResponse

    if (type === 'success') {
      navigation.navigate('Carteirinha', {token: params.access_token});
    }
    
  }

  return (
    <>
    <StatusBar
    barStyle='dark-content'
    translucent
    />
    <View style={styles.container}>
      <Image 
      style={styles.backgroundImage}
      source={require('../../assets/background2.png')} />
      <View style={styles.content}>
      <Image 
        style={styles.ueaLogo} 
        source={require('../../assets/uea-horizontal.png')} 
      />
        <Text style={styles.subtitle}>
          AGORA COMER NO RESTAURANTE {'\n'}
          UNIVERSITÁRIO DA UEA FICOU MAIS FÁCIL
        </Text>
      <Button
        title="Entrar com Google"
        icon="social-google"
        onPress={handleSignIn}
      />
      <Text style={styles.doubtText}>
        Dúvidas? Entre em contato com o {'\n'}
        departamento do seu curso
      </Text>
      </View>
    </View>
    </>
  );
}