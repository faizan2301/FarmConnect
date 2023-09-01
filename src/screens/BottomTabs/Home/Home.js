import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import product from '../../../common/data/product';
import Animated from 'react-native-reanimated';
import navigationStrings from '../../../constant/navigationStrings';
import EvilIcons from 'react-native-vector-icons/Ionicons';
const Home = props => {
  const {navigation} = props;
  const [searchText, setSearchText] = useState();
  const [searchClicked, setSearchClicked] = useState(false);
  const products = product;
  const clearText = () => {
    setSearchText('');
  };
  const navigateToProductDetail = item => {
    navigation.navigate(navigationStrings.PRODUCTDETAILSCREEN, {item: item});
  };
  const renderItem = ({item}) => {
    return (
      <View className="flex-1 flex-col m-2 overflow-hidden p-4  bg-white rounded-xl items-center justify-center shadow-xl shadow-[#99CC99]">
        <Pressable onPress={() => navigateToProductDetail(item)}>
          <Animated.Image
            sharedTransitionTag={`image-${item.id}`}
            source={{uri: item.image}}
            style={style.image}
          />
        </Pressable>
        <Pressable onPress={() => {}} className="my-2 items-center">
          <Text className="text-black text-xl">{item.name}</Text>
          {/* <Text className="text-black text-xl">Buy</Text> */}
        </Pressable>
      </View>
    );
  };

  const renderItem2 = ({item}) => {
    console.log(item);
    return (
      <Pressable
        onPress={() => navigateToProductDetail(item)}
        className="flex-1 flex-row m-2 overflow-hidden p-2  bg-[#F4FBF5] rounded-xl items-center justify-start shadow-xl shadow-[#99CC99]">
        <Animated.Image
          sharedTransitionTag={`image-${item.id}`}
          source={{uri: item.image}}
          className="h-32 w-32"
        />
        <View className="flex-col ml-2">
          <Animated.Text
            className="text-black text-xl"
            sharedTransitionTag={`text-${item.id}`}>
            {item.name}
          </Animated.Text>
          <View className="flex-row items-center justify-start">
            <EvilIcons name="location" color="black" size={24} />
            <Text className="text-black text-lg">{item.location}</Text>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View className="flex-1 bg-[#f4f4fb] px-2 ">
      <View className="border border-black rounded-lg flex-row items-center justify-between px-4 mx-2 mt-4 mb-2">
        <TouchableOpacity>
          <Icon name="magnify" color="grey" size={30} />
        </TouchableOpacity>
        <TextInput
          value={searchText}
          placeholder="Search here..."
          style={style.input}
          placeholderTextColor="grey"
          onFocus={() => setSearchClicked(true)}
          onBlur={() => setSearchClicked(false)}
          onChange={setSearchText}
          returnKeyType="next"
        />
        {searchClicked ? (
          <TouchableOpacity onPress={clearText}>
            <Icon name="close" color="grey" size={30} />
          </TouchableOpacity>
        ) : null}
      </View>
      {/* <FlatList
        data={product}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      /> */}
      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem2}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 18,
    flex: 1,
    color: 'black',
    flexDirection: 'row',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    overflow: 'hidden',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    alignContent: 'center',
    shadowColor: 'green',
    borderColor: 'red',
    borderWidth: 0.5,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
  },
});
export default Home;
