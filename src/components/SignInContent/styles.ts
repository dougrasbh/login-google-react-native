import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#B6D96A'
  },
  content: {
    width: '100%',
    marginTop: 24,
  },
  title: {
    
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    fontFamily: theme.fonts.bold,
    fontSize: 32,
  },
  subtitle: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    fontSize: 15,
  },
  description: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.note,
    textAlign: 'justify',
    marginTop: 24,
  }
});