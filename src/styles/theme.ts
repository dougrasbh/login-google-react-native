import { Platform } from "react-native"
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const theme = {
  colors: {
    background: '#fff',
    primary: '#B6D96A',
    secondary: '#000',
    text: '#000000',
    shape: '#fff',
    note: '#4E4E5D'
  },
  fonts: {
    regular: 'Poppins_400Regular',
    medium: 'Poppins_500Medium',
    bold: 'Poppins_700Bold'
  },
  bottomSpace: Platform.select({
    android: 0,
    ios: getBottomSpace(),
    default: 0,
  }),


}