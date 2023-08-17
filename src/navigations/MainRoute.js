import React from 'react';
import navigationStrings from '../constant/navigationStrings';
import {LoginScreen, SignUpScreen, SplashScreen} from '../screens';
import DeliveryTabRoutes from './DeliveryTabRoutes';

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
        name={navigationStrings.DELIVERYBOTTOMTAB}
        component={DeliveryTabRoutes}
        options={{headerShown: false}}
      />
    </>
  );
};

export default MainStack;
