import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './MainRoute';
import navigationStrings from '../constant/navigationStrings';
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navigationStrings.SPLASHSCREEN}
        screenOptions={{
          navigationBarColor: 'transparent',
          presentation: 'modal',
          contentStyle: {backgroundColor: 'white'},
          statusBarHidden: false,
        }}>
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
