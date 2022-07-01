import React from "react";

import {
  Container,
  QuantityTicket,
  TypeTicket,
  ImageContainer,
  TicketImage,
} from "./styles";

interface Props {
  quantity: string;
  typeTicket: string;
}

export function CardTicket({ quantity, typeTicket }: Props) {
  return (
    <Container>
      <QuantityTicket>{quantity} ticket(s)</QuantityTicket>
      <TypeTicket>{typeTicket}</TypeTicket>
      <ImageContainer></ImageContainer>
    </Container>
  );
}
