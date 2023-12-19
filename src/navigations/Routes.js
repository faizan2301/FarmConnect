import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './MainRoute';
import navigationStrings from '../constant/navigationStrings';
import {useColorScheme} from 'react-native';
import {primaryDarkColor, primaryLightColor} from '../constant/colors';
const Stack = createNativeStackNavigator();
const Routes = () => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navigationStrings.SPLASHSCREEN}
        screenOptions={{
          navigationBarColor: isDarkTheme
            ? primaryDarkColor
            : primaryLightColor,
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
