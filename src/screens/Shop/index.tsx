import React from "react";
import { Container, BackgroundImage } from "./styles";

import { Header } from "../../components/Header";

export function Shop() {
  return (
    <Container>
      <Header headerTitle="Comprar" />
      <BackgroundImage source={require("../../assets/back.png")} />
    </Container>
  );
}
