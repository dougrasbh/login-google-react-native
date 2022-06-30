import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: getStatusBarHeight() + 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#B6D96A',
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcome: {
    width: '100%',
  },
  title: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
    fontSize: 20,
    textAlign: 'center',
  },
  logOutButton: {
  
  }
});