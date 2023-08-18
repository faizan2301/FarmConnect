/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constant/navigationStrings';
import {HomeScreen} from '../screens';
import HeaderComponent from '../components/HeaderComponent';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
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
    </Stack.Navigator>
  );
};

export default HomeStack;
