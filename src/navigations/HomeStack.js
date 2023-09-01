/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constant/navigationStrings';
import {HomeScreen, ProductDetailScreen} from '../screens';
import HeaderComponent from '../components/HeaderComponent';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackVisible: false,
        animation: 'slide_from_right',
        headerStyle: {backgroundColor: '#99CC99'},
      }}>
      <Stack.Screen
        name={navigationStrings.HOMESCREEN}
        component={HomeScreen}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <HeaderComponent
                navigation={navigation}
                title={'Home'}
                isBack={false}
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name={navigationStrings.PRODUCTDETAILSCREEN}
        component={ProductDetailScreen}
        options={({navigation}) => {
          return {
            headerBackVisible: false,
            headerTitle: () => (
              <HeaderComponent
                navigation={navigation}
                title={'Product Detail'}
                isBack={true}
              />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
