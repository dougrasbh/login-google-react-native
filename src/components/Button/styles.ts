import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.shape,
    paddingVertical: 10,
    borderRadius: 20,
  },
  text: {
    color: theme.colors.secondary,
    fontSize: 18,
    marginLeft: 12,
    fontFamily: theme.fonts.bold
  },
  googleLogo: {
    width: 40,
    height: 40
  }
});