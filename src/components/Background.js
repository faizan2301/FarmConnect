import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Dimensions,
  View,
  Platform,
  Image,
  useColorScheme,
} from 'react-native';
import React, {memo} from 'react';
import imageConstant from '../constant/imageConstant';
import {primaryDarkColor, primaryLightColor} from '../constant/colors';
const BackGround = ({children}) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  const bgColor = isDarkTheme ? primaryDarkColor : primaryLightColor;
  return (
    // <ImageBackground
    //   source={imageConstant.bgLogin}
    //   resizeMode="repeat"
    //   style={styles.background}>

    // </ImageBackground>

    <KeyboardAvoidingView
      style={[styles.container, {backgroundColor: bgColor}]}
      behavior={behavior}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{marginHorizontal: 20}}>
        {/* <Image source={imageConstant.loginLogo} className="h-28  w-24 mt-6 " /> */}
        <View className="self-center ">
          <View className="flex-row items-center justify-center h-44 ">
            <Image source={imageConstant.loginLogo} className="h-12  w-12  " />
            <Text
              className={`text-primaryLightTxtColor dark:text-primaryDarkTxtColor text-2xl `}>
              Farm Konnect
            </Text>
          </View>
          <Text
            className={`text-primaryLightTxtColor dark:text-primaryDarkTxtColor text-xl`}>
            Sign in to your Account
          </Text>
        </View>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default memo(BackGround);
const styles = StyleSheet.create({
  linearGradient: {flex: 1},
  container: {
    flex: 1,
  },
});
