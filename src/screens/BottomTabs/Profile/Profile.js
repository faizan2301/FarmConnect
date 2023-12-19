import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {iconColor} from '../../../constant/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Profile = props => {
  const {navigation} = props;
  return (
    <View className="flex-1">
      <View className="bg-buttonColor dark:bg-secondaryButtonColor h-[15%]">
        <View className="flex-row  justify-between  items-center m-4">
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-back-ios" color={iconColor} size={26} />
          </Pressable>
          <Text className=" text-black text-2xl">Profile</Text>
          <View />
        </View>
      </View>
      <View
        className={`bg-secondaryLightColor dark:bg-secondaryDarkColor rounded-xl items-center p-6 mx-4 -mt-4 z-10 flex-col`}></View>
    </View>
  );
};

export default Profile;
