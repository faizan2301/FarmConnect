import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import product from '../../../common/data/product';
import Animated from 'react-native-reanimated';
import navigationStrings from '../../../constant/navigationStrings';

const Home = props => {
  const {navigation} = props;
  const [searchText, setSearchText] = useState();
  const [searchClicked, setSearchClicked] = useState(false);
  const clearText = () => {
    setSearchText('');
  };
  const navigateToProductDetail = item => {
    navigation.navigate(navigationStrings.PRODUCTDETAILSCREEN, {item: item});
  };
  return (
    <View className="flex-1 bg-slate-200 p-2">
      <View className="border border-black rounded-lg flex-row items-center justify-between px-2">
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
      <FlatList
        data={product}
        renderItem={({item}) => (
          <View style={[style.itemContainer]}>
            <Pressable onPress={() => navigateToProductDetail(item)}>
              <Animated.Image
                sharedTransitionTag={`image-${item.id}`}
                source={{uri: item.image}}
                style={style.image}
              />
            </Pressable>
            <Pressable onPress={() => {}} className="my-4 items-center">
              <Text className="text-black text-xl">{item.name}</Text>
              {/* <Text className="text-black text-xl">Buy</Text> */}
            </Pressable>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
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
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    alignContent: 'center',
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
