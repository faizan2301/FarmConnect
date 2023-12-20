/* eslint-disable react-hooks/exhaustive-deps */
import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import imageConstant from '../../constant/imageConstant';
import navigationStrings from '../../constant/navigationStrings';
import {getCredentials, getToken} from '../../common/AsyncStorageFunctions';
import {useDispatch} from 'react-redux';
import {saveToken} from '../../redux/slice/tokenSlice';
import {saveUserData} from '../../redux/slice/authSlice';

const SplashScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval);
      // navigate();
      checkCredentials();
    }, 5000);
  }, []);
  const checkCredentials = async () => {
    var token = await getToken();
    var credentials = await getCredentials();
    if (token) {
      dispatch(saveToken(token));
      dispatch(saveUserData(credentials));
      navigation.replace(navigationStrings.BOTTOMTAB);
    } else {
      navigation.replace(navigationStrings.LOGINSCREEN);
    }
  };
  // const navigate = () => {
  //   navigation.replace(navigationStrings.BOTTOMTAB);
  // };
  return (
    <View className="flex-1 bg-primaryLightColor dark:bg-primaryDarkColor items-center justify-center p-1">
      <LottieView
        source={imageConstant.splash}
        autoPlay
        loop
        className="h-56 w-full"
      />
      <Text className="text-black dark:text-white text-3xl font-bold">
        Farm Connect
      </Text>
    </View>
  );
};

export default SplashScreen;
