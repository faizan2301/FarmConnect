/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationStrings from '../constant/navigationStrings';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Platform, View} from 'react-native';
const Tab = createBottomTabNavigator();
const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOMESTACK}
      screenOptions={{
        tabBarActiveTintColor: '#f59c06',
        headerShown: false,
        headerBackVisible: false,
        headerStyle: () => {},
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#ffff',
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          bottom: 20,
          left: 25,
          right: 25,
          elevation: 1,
          backgroundColor: '#15142c',
          borderRadius: 15,
          height: 60,
          paddingVertical: 15,
          alignContent: 'center',
          alignItems: 'center',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name={navigationStrings.HOMESTACK}
        component={HomeStack}
        options={({navigation}) => {
          return {
            headerBackVisible: false,

            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
            headerShown: false,
          };
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILESTACK}
        component={ProfileStack}
        options={({navigation}) => {
          return {
            headerBackVisible: false,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="account" color={color} size={30} />
            ),
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
