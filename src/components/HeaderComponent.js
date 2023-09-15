import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const HeaderComponent = ({navigation, title, isBack}) => {
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View className="flex-row py-2 w-full ">
      {isBack ? (
        <Pressable onPress={onBack} className="justify-center items-center">
          <Icon name="angle-left" size={40} color="#fff" />
        </Pressable>
      ) : null}

      <View className="">
        <Text className="text-white text-2xl">{title}</Text>
      </View>

      {/* <View className="justify-center items-center p-1">
        <MaterialCommunityIcons name="cart" size={30} color="#1841c7" />
      </View> */}
    </View>
  );
};

export default HeaderComponent;
