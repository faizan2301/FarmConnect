import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {iconColor} from '../../../constant/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import navigationStrings from '../../../constant/navigationStrings';
import {clearAll} from '../../../common/AsyncStorageFunctions';
const Profile = props => {
  const {navigation} = props;
  const handleLogout = async () => {
    await clearAll();
    navigation.replace(navigationStrings.LOGINSCREEN);
  };
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
      <Pressable
        onPress={handleLogout}
        className={`border rounded-xl border-red-600 p-4 flex-row m-4`}>
        <Icon name="logout" color="red" size={26} />
        <Text className="text-red-600 text-xl self-center ml-10">Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
