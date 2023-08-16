/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationStrings from '../constant/navigationStrings';
import Home from '../screens/deliveryTabs/Home/Home';
import Profile from '../screens/deliveryTabs/Profile/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const DeliveryTabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.DELIVERYHOMESCREEN}
      screenOptions={{
        tabBarActiveTintColor: '#00619A',
        headerShown: true,
      }}>
      <Tab.Screen
        name={navigationStrings.DELIVERYHOMESCREEN}
        component={Home}
        // options={{
        //   tabBarLabel: 'Home',
        //   headerStyle: {
        //     height: 80, // Specify the height of your custom header
        //   },
        //   header: ({navigation, route, options}) => {
        //     // const title = getHeaderTitle(options, route.name);

        //     return (
        //       <View className="h-20 bg-white ">
        //         <Text className="text-black text-xl">Home</Text>
        //       </View>
        //     );
        //   },
        //   tabBarIcon: ({color, size}) => (
        //     <MaterialCommunityIcons name="home" color={color} size={size} />
        //   ),
        // }}
        options={({navigation}) => {
          return {
            // headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitle: () => (
              <HeaderTitle navigation={navigation} title={'Home'} />
            ),
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            //headerRight: () => <HeaderRight navigation={navigation} />,
          };
        }}
      />
      <Tab.Screen
        name={navigationStrings.DELIVERYPROFILESCREEN}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DeliveryTabRoutes;
function HeaderTitle({navigation, title}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginRight: 15,
        width: '100%',
        justifyContent: 'space-between',
      }}>
      <View style={{justifyContent: 'center'}}>
        <Icon name="angle-left" size={30} color="#1841c7" />
      </View>
      <View className="self-center">
        <Text className="text-black text-2xl">{title}</Text>
      </View>
      <View style={{justifyContent: 'center', padding: 5}}>
        <MaterialCommunityIcons name="cart" size={30} color="#1841c7" />
      </View>
    </View>
  );
}
