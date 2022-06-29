import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../styles/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`
export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`
export const TicketsContainer = styled.View`
  
`