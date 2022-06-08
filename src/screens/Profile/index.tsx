import React, {useEffect, useState} from 'react';
import { 
  View, 
  Text, 
  Image, 
  StatusBar,
  ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ProfileHeader } from '../../components/ProfileHeader';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';

import { styles } from './styles';

type Params = {
  token: string
}

type Profile = {
  email: string;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;
}

export function Profile() {
  const [profile, setProfile] = useState({} as Profile)
  const route = useRoute()
  const navigation = useNavigation();
  const { token } = route.params as Params

  async function handleLogout() {
    navigation.navigate('SignIn');
  }

  async function loadProfile() {
    const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`)
    const userInfo = await response.json()
    setProfile(userInfo)
  }

  useEffect(() => {
    loadProfile()
  }, [])

  return (
    <>
     <StatusBar
    barStyle='dark-content'
    translucent
    />
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/back.png')}
      style={styles.background}>
      <ProfileHeader 
      headerTitle='Carteirinha'
       />
      <View style={styles.content}>
        <View style={styles.profile}>
          <Text style={styles.name}>
            Oi, {profile.given_name}!
          </Text>
          <Avatar
            source={{ uri: profile.picture }}
          />
        </View>

        <View style={styles.about}>
          <View style={styles.info}>
            <Text style={styles.textName}>
              {profile.name}
            </Text>
            <Text style={styles.courseName} >
              Engenharia de Computação
            </Text>
            <Text style={styles.schoolName} >
              Escola Superior de Tecnologia
            </Text>
          </View>
            <View style={styles.numbers} >
              <Text style={styles.enrollNumber} >
                2015080056
              </Text>
              <Text style={styles.otherNumber} >
                9333
              </Text>
            </View>
            <Image
            style={styles.codigoBarras} 
            source={require('../../assets/codigobarras.png')} />
          </View>
        <Button
          title="Desconectar"
          icon="power"
          onPress={handleLogout}
        />
      </View>
      </ImageBackground>
    </View>
    </>
  );
}