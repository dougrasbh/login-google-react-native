import React from "react";
import { View, Text, Image, StatusBar, ImageBackground } from "react-native";

import { Header } from "../../components/Header";
import { Avatar } from "../../components/Avatar";

import { styles } from "./styles";
import { useAuthContext } from "../../hooks/useAuthContext";

type Carteirinha = {
  email: string;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;
};

export function Wallet() {
  const { user, token } = useAuthContext();

  console.log(user);

  async function handleLogout(): Promise<void> {}

  return (
    <>
      <StatusBar barStyle="dark-content" translucent />

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
        <ImageBackground
          source={require("../../assets/back.png")}
          style={styles.background}
        >
          <Header headerTitle="Carteirinha" />
          <View style={styles.content}>
            <View style={styles.profile}>
              <Text style={styles.name}>Oi, {user.given_name}!</Text>
              <Avatar source={{ uri: user.picture }} />
            </View>

            <View style={styles.about}>
              <View style={styles.info}>
                <Text style={styles.textName}>{user.name}</Text>
                <Text style={styles.courseName}>Engenharia de Computação</Text>
                <Text style={styles.schoolName}>
                  Escola Superior de Tecnologia
                </Text>
              </View>
              <View style={styles.numbers}>
                <Text style={styles.enrollNumber}>2015080056</Text>
                <Text style={styles.otherNumber}>9333</Text>
              </View>
              <Image
                style={styles.codigoBarras}
                source={require("../../assets/codigobarras.png")}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
