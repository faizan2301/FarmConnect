/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constant/navigationStrings';
import {SellScreen} from '../screens';
import HeaderComponent from '../components/HeaderComponent';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();
const SellStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackVisible: false,
        animation: 'slide_from_right',
        headerStyle: {backgroundColor: '#30893b'},
      }}>
      <Stack.Screen
        name={navigationStrings.SELLSCREEN}
        component={SellScreen}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <HeaderComponent
                navigation={navigation}
                title={'Sell'}
                isBack={false}
              />
            ),
          };
        }}
      />
      {/* <Stack.Screen
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
      /> */}
    </Stack.Navigator>
  );
};

export default SellStack;
