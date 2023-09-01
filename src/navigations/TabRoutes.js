/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationStrings from '../constant/navigationStrings';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOMESTACK}
      screenOptions={{
        tabBarActiveTintColor: '#30893b',
        headerShown: false,
        headerBackVisible: false,
      }}>
      <Tab.Screen
        name={navigationStrings.HOMESTACK}
        component={HomeStack}
        options={({navigation}) => {
          return {
            headerBackVisible: false,

            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          };
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILESTACK}
        component={ProfileStack}
        options={({navigation}) => {
          return {
            headerBackVisible: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
