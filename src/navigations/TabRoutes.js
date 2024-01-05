/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationStrings from '../constant/navigationStrings';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, View, useColorScheme} from 'react-native';
import {buttonColor, secondaryTextColor} from '../constant/colors';
import {SellScreen} from '../screens';
import SellStack from './SellStack';
const Tab = createBottomTabNavigator();
const TabRoutes = () => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOMESTACK}
      screenOptions={{
        tabBarActiveTintColor: buttonColor,
        headerShown: false,
        headerBackVisible: false,
        headerStyle: () => {},
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: isDarkTheme ? '#fff' : '#000',
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',

          elevation: 0,
          backgroundColor: isDarkTheme ? '#15142c' : '#F8F8F8',
          height: 60,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          alignContent: 'center',
          alignItems: 'center',
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Tab.Screen
        name={navigationStrings.HOMESTACK}
        component={HomeStack}
        options={({navigation}) => {
          return {
            headerBackVisible: false,

            tabBarIcon: ({focused, color, size}) => {
              // if (focused) {
              //   return (
              //     <View className={`flex-col items-center`}>
              //       <Text className={`text-buttonColor text-lg`}>Home</Text>
              //       <Text className={`text-buttonColor`}>.</Text>
              //     </View>
              //   );
              // }
              return (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={color}
                  size={30}
                />
              );
            },
            headerShown: false,
          };
        }}
      />
      <Tab.Screen
        name={navigationStrings.SELLSTACK}
        component={SellStack}
        options={({navigation}) => {
          return {
            headerBackVisible: false,

            tabBarIcon: ({focused, color, size}) => {
              // if (focused) {
              //   return (
              //     <View className={`flex-col items-center`}>
              //       <Text className={`text-buttonColor text-lg`}>Home</Text>
              //       <Text className={`text-buttonColor`}>.</Text>
              //     </View>
              //   );
              // }
              return <MaterialIcons name="sell" color={color} size={size} />;
            },
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
            tabBarIcon: ({focused, color, size}) => {
              // if (focused) {
              //   return (
              //     <View className={`flex-col items-center `}>
              //       <Text className={`text-buttonColor text-lg`}>Profile</Text>
              //       <Text className={`text-buttonColor `}>.</Text>
              //     </View>
              //   );
              // }
              return <Ionicons name="person-outline" color={color} size={24} />;
            },
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
