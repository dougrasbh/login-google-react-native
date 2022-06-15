import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { WalletUEA } from '../screens/WalletUEA';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen
          name="SignIn"
          component={SignIn}
        />
        <Screen
          name="WalletUEA"
          component={WalletUEA}
        />
      </Navigator>
    </NavigationContainer>
  )
}