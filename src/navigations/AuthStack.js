/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constant/navigationStrings';
import {
  HomeScreen,
  LoginScreen,
  ProductDetailScreen,
  SignUpScreen,
  VerifyOtpScreen,
} from '../screens';
import HeaderComponent from '../components/HeaderComponent';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        navigationBarColor: 'transparent',
        presentation: 'modal',
        contentStyle: {backgroundColor: 'white'},
        statusBarHidden: false,
      }}>
      <Stack.Screen
        name={navigationStrings.LOGINSCREEN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SIGNUPSCREEN}
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.VERIFYOTPSCREEN}
        component={VerifyOtpScreen}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <HeaderComponent
                navigation={navigation}
                title={'Verify otp'}
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
