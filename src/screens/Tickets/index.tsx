import React from "react";
import { StatusBar } from "react-native";
import { Container, BackgroundImage, TicketsContainer } from "./styles";

import { CardTicket } from "../../components/CardTicket";
import { Header } from "../../components/Header";

export function Tickets() {
  async function handleLogout() {}
  return (
    <>
      <StatusBar barStyle="dark-content" translucent />
      <Container>
        <Header headerTitle="Tickets" onPress={handleLogout} />
        <TicketsContainer>
          <CardTicket typeTicket="Desjejum" quantity="3" />
          <CardTicket typeTicket="Almoço" quantity="3" />
          <CardTicket typeTicket="Lanche" quantity="3" />
          <CardTicket typeTicket="Jantar" quantity="3" />
        </TicketsContainer>
      </Container>
    </>
  );
}
