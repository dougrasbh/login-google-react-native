import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import {theme} from '../../styles/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`
export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`
export const Content = styled.View`
  padding-right: 44px;
  padding-left: 44px;
`
export const UserProfile = styled.View`
  width: 100%;
`
export const UserName = styled.Text`

`

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    width: '100%',
    height: '100%'
  },
  profile: {
    width: '100%',
  },
  content: {
    paddingBottom: getBottomSpace() + 20,
    paddingHorizontal: 44,
  },
  name: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
    fontSize: 23,
    paddingVertical: 20,    
  },
  about: {
    width: '100%',
    marginVertical: 32,
    justifyContent: 'space-between',
  },
  textName: {
    width: '115%',
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    fontSize: 18,
    backgroundColor: '#EAF2CE',
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 15
  },
  courseName: {
    width: '115%',
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    fontSize: 18,
    backgroundColor: '#EAF2CE',
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 15
  },
  schoolName: {
    width: '115%',
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    fontSize: 18,
    backgroundColor: '#EAF2CE',
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 15
  },
  numbers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  enrollNumber: {
    width: '60%',
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    fontSize: 18,
    backgroundColor: '#EAF2CE',
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 15,
    marginRight: 10
  },
  otherNumber: {
    width: '40%',
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    fontSize: 18,
    backgroundColor: '#EAF2CE',
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 15
  },
  info: {
    alignItems: 'center',
  },
  codigoBarras: {
    width: '100%',
    height: 70
  }
});