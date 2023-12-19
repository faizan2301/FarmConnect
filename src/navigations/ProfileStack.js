/* eslint-disable react/no-unstable-nested-components */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constant/navigationStrings';
import {ProfileScreen} from '../screens';
const Stack = createNativeStackNavigator();
import React from 'react';
// import HeaderComponent from '../components/HeaderComponent';

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={navigationStrings.PROFILESCREEN}
        component={ProfileScreen}
        options={({navigation}) => {
          return {
            // headerTitle: () => (
            //   <HeaderComponent
            //     navigation={navigation}
            //     title={'Profile'}
            //     isBack={true}
            //   />
            // ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
