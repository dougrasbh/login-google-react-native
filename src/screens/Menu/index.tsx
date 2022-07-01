import React from "react";
import { StatusBar } from "react-native";

import { Container, BackgroundImage } from "./styles";

import { Header } from "../../components/Header";

export function Menu() {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent />
      <Container>
        <Header headerTitle="Cardápio" />
        <BackgroundImage
          source={require("../../assets/back.png")}
        ></BackgroundImage>
      </Container>
    </>
  );
}
