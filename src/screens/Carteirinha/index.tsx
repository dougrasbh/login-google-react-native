import React, {useEffect, useState} from 'react';
import { 
  View, 
  Text, 
  Image, 
  StatusBar,
  ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Avatar } from '../../components/Avatar';

import { styles } from './styles';

type Params = {
  token: string
}

type Carteirinha = {
  email: string;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;
}

export function Carteirinha() {
  const [profile, setProfile] = useState({} as Carteirinha)
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
    
    {/*<Container>
      <BackgroundImage>
        <Header 
        headerTitle='Carteirinha'
        onPress={handleLogout}
        />
        <Content>
          <UserProfile>
            <UserName></UserName>
            <Avatar
            source={{ uri: profile.picture }}
            />
          </UserProfile>
          <AboutUser>
            <UserInfo>
              <UserFullName></UserFullName>
              <UserCourseName></UserCourseName>
              <UserSchoolName></UserSchoolName>
            </UserInfo>
            <UserNumbers>
              <UserEnrollNumber></UserEnrollNumber>
              <UserOtherNumber></UserOtherNumber>
            </UserNumbers>
            <BarCode></BarCode>
          </AboutUser>
        </Content>
      </BackgroundImage>
      
    </Container>
  */}
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/back.png')}
      style={styles.background}>
      <Header 
      headerTitle='Carteirinha'
      onPress={handleLogout}
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
      </View>
      </ImageBackground>
    </View>
    </>
  );
}