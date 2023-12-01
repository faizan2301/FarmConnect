import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import Animated from 'react-native-reanimated';
import EvilIcons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ProductDetailScreen = props => {
  const {
    navigation,
    route: {
      params: {item},
    },
  } = props;
  console.log(item);

  return (
    <SafeAreaView className="flex-1 bg-[#14142c] ">
      <View className="bg-[#fcfdfd] flex-1 rounded-b-[26px]">
        <View className="flex-row justify-between items-center m-4">
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-back-ios" color="#f49c07" size={26} />
          </Pressable>
          <Icon name="shopping-cart" color="#f49c07" size={26} />
        </View>
        <Animated.Image
          sharedTransitionTag={`image-${item.id}`}
          style={styles.image}
          source={{uri: item.image}}
        />
        <View className="px-4 mt-4 bg-[#fcfdfd]">
          <Animated.Text
            className="text-black text-2xl font-bold mt-3 "
            sharedTransitionTag={`text-${item.id}`}>
            {item.name}
          </Animated.Text>
          <Text className="text-slate-500 text-xl leading-8">
            {item.description}
          </Text>
          <View className="flex-row items-center">
            <EvilIcons name="location" color="black" size={24} />
            <Text className="text-black text-2xl ">{item.location}</Text>
          </View>
          <Text className="text-black text-xl leading-8">Available in</Text>
          {item.sizes.map((element, key) => {
            return (
              <Text className="text-black text-lg " key={key}>
                {element}
              </Text>
            );
          })}
        </View>
      </View>
      <View className="flex-row  justify-between items-center px-4 mt-4">
        <Text className="flex-1 font-bold text-white text-xl ">
          Price : {item.price}/kg
        </Text>
        <Pressable className="flex-1 bg-[#f49c07]  p-2 rounded-lg">
          <Text className="text-white text-xl mx-auto">Contact</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").width * 0.75, // adjust the height based on your image aspect ratio
    // resizeMode: "cover",
    width: '100%',
    height: 200,
  },
});
export default ProductDetailScreen;
