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
import Animated from 'react-native-reanimated';
import navigationStrings from '../../../constant/navigationStrings';
import EvilIcons from 'react-native-vector-icons/Ionicons';
import FilterButton from '../../../components/FilterButton';
import fruits from '../../../common/data/fruits';
import vegetable from '../../../common/data/vegetable';
import dairyProducts from '../../../common/data/dairyProducts';
import pulses from '../../../common/data/pulses';
import imageConstant from '../../../constant/imageConstant';
const Home = props => {
  const [filterOrder, setFilterOrder] = useState('fruits');
  const {navigation} = props;
  const [searchText, setSearchText] = useState();
  const [searchClicked, setSearchClicked] = useState(false);
  const [productData, setProductData] = useState(fruits);

  const clearText = () => {
    setSearchText('');
  };
  const navigateToProductDetail = item => {
    navigation.navigate(navigationStrings.PRODUCTDETAILSCREEN, {item: item});
  };
  const data = [
    {title: 'Fruits', key: 'fruits'},
    {title: 'Vegetables', key: 'vegetables'},
    {title: 'Dairy Products', key: 'dairyProducts'},
    {title: 'Pulses', key: 'pulses'},
    // {title: 'Spices', key: 'spices'},
    // {title: 'Seeds', key: 'seeds'},
  ];
  const changeProduct = key => {
    if (key === 'fruits') {
      setProductData(fruits);
    } else if (key === 'vegetables') {
      setProductData(vegetable);
    } else if (key === 'dairyProducts') {
      setProductData(dairyProducts);
    }
    // else if (key === 'spices') {
    //   setProductData(spices);
    // }
    else if (key === 'pulses') {
      setProductData(pulses);
    }
    // else if (key === 'seeds') {
    //   setProductData(seeds);
    // }
  };

  // Start the animation
  const renderItem2 = ({item}) => {
    console.log(item);
    return (
      <Pressable
        onPress={() => navigateToProductDetail(item)}
        className="flex-1 flex-row m-2 overflow-hidden p-2  bg-[#F4FBF5] rounded-xl items-center justify-start shadow-xl shadow-[#99CC99]">
        <Animated.Image
          sharedTransitionTag={`image-${item.id}`}
          source={{uri: item.image}}
          className="h-32 w-32 rounded-xl self"
          loadingIndicatorSource={imageConstant.loader}
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
  const renderItem = ({item}) => (
    <FilterButton
      title={item.title}
      onPress={() => {
        setFilterOrder(item.key);
        changeProduct(item.key);
      }}
      isSelected={filterOrder === item.key}
    />
  );
  return (
    <View className="flex-1 bg-[#f4f4fb] px-2  ">
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
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.flatListContent}
      />
      <FlatList
        data={productData}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem2}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 80}}
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
    borderRadius: 10,
  },
  flatListContent: {
    marginVertical: 10,
    height: 100,
  },
});
export default Home;
