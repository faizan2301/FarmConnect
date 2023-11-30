import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
  useColorScheme,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated from 'react-native-reanimated';
import navigationStrings from '../../../constant/navigationStrings';
import FilterButton from '../../../components/FilterButton';
import fruits from '../../../common/data/fruits';
import vegetable from '../../../common/data/vegetable';
import dairyProducts from '../../../common/data/dairyProducts';
import pulses from '../../../common/data/pulses';
import imageConstant from '../../../constant/imageConstant';
import {SafeAreaView} from 'react-native-safe-area-context';
const Home = props => {
  const [filterOrder, setFilterOrder] = useState('fruits');
  const {navigation} = props;
  const [searchText, setSearchText] = useState();
  const [searchClicked, setSearchClicked] = useState(false);
  const [productData, setProductData] = useState(fruits);
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
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
        className="flex-1 flex-col m-2 overflow-hidden p-2  bg-[#f2f3f2] dark:bg-[#1d1c37] rounded-xl  justify-start shadow-xl ">
        <Animated.Text
          className="text-black dark:text-white text-xl"
          sharedTransitionTag={`text-${item.id}`}>
          {item.name}
        </Animated.Text>

        <Text className="text-gray-400 text-sm">Price per kg</Text>
        <Text className="text-black dark:text-white text-xl mb-2">
          {item.price}
        </Text>
        <Animated.Image
          sharedTransitionTag={`image-${item.id}`}
          source={{uri: item.image}}
          className="h-32 w-32 rounded-xl self-center"
          loadingIndicatorSource={imageConstant.loader}
        />
        <View className="self-end mt-2">
          <Icon name="cart" color="#f49c07" size={26} />
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
    <SafeAreaView className="flex-1 bg-[#fcfdfd] dark:bg-[#14142c] px-2  ">
      {/* <View className="flex-row mx-2 mt-2 items-center justify-between">
        <View className="flex-row">
          <Animated.Image
            source={{
              uri: 'https://res.cloudinary.com/dxcfomhnp/image/upload/v1690278136/olive/us94s576s7bvbh91lkue.png',
            }}
            className="h-12 w-12 "
          />
          <View className="flex-col ml-2 ">
            <Animated.Text className="text-gray-400 text-xs">
              Welcome back!
            </Animated.Text>
            <Animated.Text className="text-black dark:text-white text-lg">
              Shaikh Faizan
            </Animated.Text>
          </View>
        </View>
        <View>
          <Icon name="bell" color="#f49c07" size={26} />
        </View>
      </View> */}
      <View className="flex-row mx-2 mt-2 items-center justify-between">
        <View className="flex-row items-center">
          <Animated.Image
            source={{
              uri: 'https://res.cloudinary.com/dxcfomhnp/image/upload/v1690278136/olive/us94s576s7bvbh91lkue.png',
            }}
            className="h-12 w-12"
          />
          <View className="flex-col ml-2">
            <Animated.Text className="text-gray-400 text-xs">
              Welcome back!
            </Animated.Text>
            <Animated.Text className="text-black dark:text-white text-lg">
              Shaikh Faizan
            </Animated.Text>
          </View>
        </View>

        <Icon name="bell" color="#f49c07" size={26} />
      </View>
      <View className="border bg-#f3f3f3 dark:bg-[#1d1c37] border-black rounded-lg flex-row items-center justify-between px-4 mx-2 mt-6 mb-2">
        <TouchableOpacity>
          <Icon
            name="magnify"
            color={isDarkTheme ? '#fff' : '#000'}
            size={26}
          />
        </TouchableOpacity>
        <TextInput
          value={searchText}
          placeholder="Search here.."
          style={style.input}
          className="dark:bg-[#1d1c37]"
          placeholderTextColor="#fff"
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
        numColumns={2}
        contentContainerStyle={{paddingBottom: 80}}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 18,
    flex: 1,
    flexDirection: 'row',
  },
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  flatListContent: {
    marginVertical: 8,
  },
});
export default Home;

// itemContainer: {
//   flex: 1,
//   flexDirection: 'column',
//   margin: 10,
//   overflow: 'hidden',
//   padding: 10,
//   backgroundColor: 'white',
//   borderRadius: 8,
//   alignItems: 'center',
//   alignContent: 'center',
//   shadowColor: 'green',
//   borderColor: 'red',
//   borderWidth: 0.5,
// },
// image: {
//   width: '100%',
//   aspectRatio: 1,
//   borderColor: 'grey',
//   borderWidth: 1,
//   borderRadius: 10,
// },
