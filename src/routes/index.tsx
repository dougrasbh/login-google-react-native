import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { WalletUEA } from '../screens/WalletUEA';
import { SignIn } from '../screens/SignIn';
import { Tickets } from '../screens/Tickets';

import { 
  Entypo, 
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export function BottomMenuRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBar={
        props => <BottomTabBar {...props} state={{...props.state, routes: props.state.routes.slice(0,6)}}></BottomTabBar>}
      screenOptions={{
        tabBarStyle: {
          borderTopColor: 'transparent',
          borderEndColor:  'transparent',
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarActiveTintColor : '#B6D96A',
        tabBarInactiveTintColor: '#707365',
        headerShown: false
      }}
      >
        <Tab.Screen 
        name='SignIn' 
        component={SignIn} 
        options={{
          tabBarStyle: { display: "none" },
        }}
        />

        <Tab.Screen 
        name='WalletUEA' 
        component={WalletUEA}
        options={{tabBarIcon: ({focused, size, color}) => (
          <FontAwesome name="id-card-o" size={size} color={color} />
        )}} 
         />

        <Tab.Screen
        name='Tickets' 
        component={Tickets}
        options={{tabBarIcon: ({focused, size, color}) => (
          <Entypo name="ticket" size={size} color={color} />
        )}} 
        />

        <Tab.Screen 
        name='Comprar' 
        component={Tickets}
        options={{tabBarIcon: ({focused, size, color}) => (
          <FontAwesome5 name="money-check-alt" size={size} color={color} />
        )}} 
        />

        <Tab.Screen 
        name='Cardápio' 
        component={Tickets}
        options={{tabBarIcon: ({focused, size, color}) => (
          <MaterialCommunityIcons name="silverware-fork-knife" size={size} color={color} />
        )}} 
         />
        <Tab.Screen 
        name='Histórico' 
        component={Tickets}
        options={{tabBarIcon: ({focused, size, color}) => (
          <FontAwesome5 name="file-invoice" size={size} color={color} />
        )}} 
         />
      </Tab.Navigator>
    </NavigationContainer>
    
  )
}