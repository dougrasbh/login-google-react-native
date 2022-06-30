import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B6D96A',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    height: 450,
  },
  title: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    fontFamily: theme.fonts.bold,
    fontSize: 32,
    marginBottom: 30
  },
  subtitle: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    fontSize: 15,
    paddingVertical: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  ueaLogo: {
    width: 110,
    height: 100,
    marginBottom: 20
  },
  backgroundImage: {
    width: '100%',
    height: 550,
    marginBottom: -100
  },
  doubtText: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    fontSize: 13,
    paddingVertical: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});