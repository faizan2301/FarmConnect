import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import EvilIcons from 'react-native-vector-icons/Ionicons';
const ProductDetailScreen = props => {
  const {
    navigation,
    route: {
      params: {item},
    },
  } = props;
  console.log(item);
  return (
    <View className="flex-1 bg-[#F4FBF5] p-4 ">
      <Animated.Image
        sharedTransitionTag={`image-${item.id}`}
        style={styles.image}
        source={{uri: item.image}}
      />
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
      <View className="flex-row mt-auto justify-between items-center">
        <Text className="flex-1 font-bold text-black text-xl ">
          Price : {item.price}/kg
        </Text>
        <Pressable className="flex-1 bg-[#30893b]  p-2 rounded-lg">
          <Text className="text-white text-xl mx-auto">Contact</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").width * 0.75, // adjust the height based on your image aspect ratio
    // resizeMode: "cover",
    width: '100%',
    aspectRatio: 16 / 9,
  },
});
export default ProductDetailScreen;
