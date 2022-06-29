import React from 'react';
import { 
  StatusBar,
  } from 'react-native';

import {
  Container,
  BackgroundImage,
  TicketsContainer
} from './styles'

import { Header } from '../../components/Header';

export function Tickets() {
  return (
    <>
     <StatusBar
    barStyle='dark-content'
    translucent
    />
    <Container>
      <Header 
      headerTitle='Tickets'
       />
       <BackgroundImage
       source={require('../../assets/back.png')}
       />
       <TicketsContainer>

       </TicketsContainer>

    </Container>
    </>
  );
}