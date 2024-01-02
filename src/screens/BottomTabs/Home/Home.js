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
// import fruits from '../../../common/data/fruits';
// import vegetable from '../../../common/data/vegetable';
// import dairyProducts from '../../../common/data/dairyProducts';
// import pulses from '../../../common/data/pulses';
import imageConstant from '../../../constant/imageConstant';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  dairyIconBg,
  fruitsIconBg,
  pulsesIconBg,
  secondaryTextColor,
  vegieIconBg,
} from '../../../constant/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  useGetCategoriesMutation,
  useGetProductsMutation,
} from '../../../redux/api/api';
import Loader from '../../../common/Loader';
import {saveCategoryData} from '../../../redux/slice/categorySlice';
import {handleResponse} from '../../../common/functions';
import {saveProductData} from '../../../redux/slice/productSlice';
const Home = props => {
  var {token} = useSelector(state => state.token);
  const dispatch = useDispatch();
  const [filterOrder, setFilterOrder] = useState();
  const [getPData, {data: pdata, isLoading: pdataLoading, error: pError}] =
    useGetProductsMutation();
  const {navigation} = props;
  const [searchText, setSearchText] = useState();
  const [searchClicked, setSearchClicked] = useState(false);
  const [productData, setProductData] = useState([]);
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  const [getCategories, {data: categoriesData, isLoading, error}] =
    useGetCategoriesMutation();
  const clearText = () => {
    setSearchText('');
  };
  const navigateToProductDetail = async item => {
    await dispatch(saveProductData(item));
    navigation.navigate(navigationStrings.PRODUCTDETAILSCREEN);
  };
  useEffect(() => {
    getData();
  }, [0]);
  const getData = async () => {
    var body = {token};
    var response = await getCategories(body);
    handleResponse(response, false, res => {
      changeProduct(res[0]);
    });
  };
  const data = [
    {
      title: 'Fruits',
      key: 'fruits',
      color: fruitsIconBg,
      icon: imageConstant.grape,
    },
    {
      title: 'Vegie',
      key: 'Vegetables',
      color: vegieIconBg,
      icon: imageConstant.borcolli,
    },
    {
      title: 'Dairy',
      key: 'Dairy Products',
      color: dairyIconBg,
      icon: imageConstant.cheese,
    },
    {
      title: 'Pulses',
      key: 'Pulses',
      color: pulsesIconBg,
      icon: imageConstant.lentil,
    },
    // {title: 'Spices', key: 'spices'},
    // {title: 'Seeds', key: 'seeds'},
  ];

  const changeProduct = async item => {
    await dispatch(saveCategoryData(item));
    setFilterOrder(item.categoryName);

    getProductData(item._id);
    // if (item.categoryName === 'Fruits') {
    //   setProductData(fruits);
    // } else if (item.categoryName === 'Vegetables') {
    //   setProductData(vegetable);
    // } else if (item.categoryName === 'Dairy Products') {
    //   setProductData(dairyProducts);
    // } else if (item.categoryName === 'Pulses') {
    //   setProductData(pulses);
    // }
  };
  const getProductData = async id => {
    var body = {token, categoryId: id, skip: 0};
    var response = await getPData(body);
    handleResponse(response, false, res => {
      setProductData(res.data);
    });
  };
  // Start the animation
  const renderItem2 = ({item}) => {
    return (
      <Pressable
        onPress={() => navigateToProductDetail(item)}
        className="flex-1 flex-row mx-2 mb-2 overflow-hidden p-4  bg-secondaryLightColor dark:bg-[#1d1c37] rounded-xl  items-center  shadow-xl ">
        <Animated.Image
          sharedTransitionTag={`image-${item._id}`}
          source={{uri: item.image}}
          className="h-28 w-28 rounded-xl self-center"
          loadingIndicatorSource={imageConstant.loader}
        />
        <View className={`flex-col mx-4`}>
          <Animated.Text
            className="text-black dark:text-white text-xl"
            sharedTransitionTag={`text-${item._id}`}>
            {item.productName}
          </Animated.Text>
          <Text className="text-secondaryTextColor text-sm">Price per kg</Text>

          <Text className="text-black dark:text-white text-xl mb-2">20</Text>
        </View>
      </Pressable>

      // <Pressable
      //   onPress={() => navigateToProductDetail(item)}
      //   className="flex-1 flex-col m-2 overflow-hidden p-2  bg-secondaryLightColor dark:bg-[#1d1c37] rounded-xl  justify-start shadow-xl ">
      //   <Animated.Text
      //     className="text-black dark:text-white text-xl"
      //     sharedTransitionTag={`text-${item.id}`}>
      //     {item.name}
      //   </Animated.Text>

      //   <Text className="text-secondaryTextColor text-sm">Price per kg</Text>
      //   <Text className="text-black dark:text-white text-xl mb-2">
      //     {item.price}
      //   </Text>
      //   <Animated.Image
      //     sharedTransitionTag={`image-${item.id}`}
      //     source={{uri: item.image}}
      //     className="h-32 w-32 rounded-xl self-center"
      //     loadingIndicatorSource={imageConstant.loader}
      //   />
      //   {/* <View className="self-end mt-2">
      //     <Icon name="cart" color="#f49c07" size={26} />
      //   </View> */}
      // </Pressable>
    );
  };
  const renderItem = ({item}) => {
    return (
      <FilterButton
        item={item}
        onPress={() => {
          changeProduct(item);
        }}
        isSelected={filterOrder === item.categoryName}
      />
    );
  };
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-primaryDarkColor px-2  ">
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
      <Loader isLoading={isLoading || pdataLoading} />
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
        {/* <View className={`bg-buttonColor p-3 rounded-2xl`}>
          <Icon name="cart" color="#fff" size={26} />
        </View> */}
      </View>
      <View className=" bg-secondaryLightColor dark:bg-secondaryDarkColor  rounded-xl flex-row items-center justify-between px-4 mx-2 mt-6 mb-2">
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
          placeholderTextColor={secondaryTextColor}
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
        data={categoriesData}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.flatListContent}
      />
      <View className={`h-2 `} />
      <FlatList
        data={productData}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem2}
        keyExtractor={item => item._id}
        // numColumns={2}
        contentContainerStyle={{
          paddingBottom: 80,
          justifyContent: 'flex-start',
        }}
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
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  flatListContent: {
    marginVertical: 6,
    height: 130,
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
