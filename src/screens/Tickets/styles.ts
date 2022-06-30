import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`
export const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
`
export const TicketsContainer = styled.ScrollView.attrs({
  vertical: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingHorizontal: 24}
})`
  width: 100%;
  background-color: "#000";
`
  
