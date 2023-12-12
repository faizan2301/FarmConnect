import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  useColorScheme,
} from 'react-native';
import React, {useReducer} from 'react';
import Animated from 'react-native-reanimated';
import EvilIcons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {buttonColor, iconColor} from '../../constant/colors';
import Feather from 'react-native-vector-icons/Feather';
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count > 0 ? state.count - 1 : 0};
    default:
      return state;
  }
};

// Define the initial state
const initialState = {count: 0};
const ProductDetailScreen = props => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  const {
    navigation,
    route: {
      params: {item},
    },
  } = props;
  console.log(item);

  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <SafeAreaView className="flex-1 bg-primaryLightColor dark:bg-primaryDarkColor ">
      <View className="flex-row justify-between items-center m-4">
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-back-ios" color={iconColor} size={26} />
        </Pressable>
        <Feather name="shopping-cart" color={iconColor} size={26} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animated.Image
          sharedTransitionTag={`image-${item.id}`}
          style={styles.image}
          source={{uri: item.image}}
        />
        <View className={`p-4 flex-col`}>
          <Animated.Text
            className="text-primaryLightTxtColor dark:text-primaryDarkTxtColor text-xl font-bold mt-3 "
            sharedTransitionTag={`text-${item.id}`}>
            {item.name}
          </Animated.Text>
          <Text className="text-primaryLightTxtColor dark:text-primaryDarkTxtColor text-lg ">
            {item.price}/lb
          </Text>
          <Text className="text-secondaryTextColor text-sm mt-6 mb-4">
            {item.description}
          </Text>
          <View className="flex-row items-center">
            <EvilIcons
              name="location"
              color={isDarkTheme ? 'white' : 'black'}
              size={22}
            />
            <Text className="text-primaryLightTxtColor dark:text-primaryDarkTxtColor text-xl ">
              {item.location}
            </Text>
          </View>

          <View className="flex-row items-center mt-4">
            <Pressable
              onPress={() => dispatch({type: 'DECREMENT'})}
              className={`bg-lightButtonColor rounded-lg p-1`}>
              <Feather name="minus" size={24} color={buttonColor} />
            </Pressable>
            <Text
              className={`text-primaryLightTxtColor dark:bg-primaryDarkTxtColor text-xl mx-4`}>
              {state.count}
            </Text>
            <Pressable
              onPress={() => dispatch({type: 'INCREMENT'})}
              className={`bg-buttonColor rounded-lg p-1`}>
              <Feather name="plus" size={24} color="white" />
            </Pressable>
            <Pressable className={`bg-buttonColor p-3 mx-6 rounded-xl`}>
              <Text className={`text-white text-xl`}>Add to cart</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
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
  scrollContainer: {},
});
export default ProductDetailScreen;
