/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import navigationStrings from '../constant/navigationStrings';
import {
  CategoryListScreen,
  LoginScreen,
  ProductDetailScreen,
  SignUpScreen,
  SplashScreen,
  VerifyOtpScreen,
} from '../screens';
import TabRoutes from './TabRoutes';
import HeaderComponent from '../components/HeaderComponent';

const MainStack = Stack => {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.SPLASHSCREEN}
        component={SplashScreen}
        options={{headerShown: false}}
      />
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
        options={{headerShown: false}}
        // options={({navigation}) => {
        //   return {

        //     headerTitle: () => (
        //       <HeaderComponent
        //         navigation={navigation}
        //         title={'Verify otp'}
        //         isBack={false}
        //       />
        //     ),
        //   };
        // }}
      />
      <Stack.Screen
        name={navigationStrings.BOTTOMTAB}
        component={TabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.PRODUCTDETAILSCREEN}
        component={ProductDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.CATEGORYLISTSCREEN}
        component={CategoryListScreen}
        options={{headerShown: false}}
      />
    </>
  );
};

export default MainStack;
