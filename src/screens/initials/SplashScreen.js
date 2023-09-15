/* eslint-disable react-hooks/exhaustive-deps */
import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import imageConstant from '../../constant/imageConstant';
import navigationStrings from '../../constant/navigationStrings';

const SplashScreen = props => {
  const {navigation} = props;
  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval);
      navigate();
    }, 5000);
  }, []);
  const navigate = () => {
    navigation.replace(navigationStrings.BOTTOMTAB);
  };
  return (
    <View className="flex-1 bg-white items-center justify-center p-1">
      <LottieView
        source={imageConstant.splash}
        autoPlay
        loop
        className="h-56 w-full"
      />
      <Text className="text-black text-3xl font-bold">Farm Connect</Text>
    </View>
  );
};

export default SplashScreen;
