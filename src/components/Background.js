import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Dimensions,
  View,
  Platform,
} from 'react-native';
import React, {memo} from 'react';
import imageConstant from '../constant/imageConstant';
const BackGround = ({children}) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  return (
    // <ImageBackground
    //   source={imageConstant.bgLogin}
    //   resizeMode="repeat"
    //   style={styles.background}>

    // </ImageBackground>
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{marginHorizontal: 20}}>
        {/* <Image source={imageConstant.loginLogo} className="h-28  w-24 mt-6 " /> */}
        <Text className={`text-primaryLightTxtColor text-2xl`}>
          Farm Konnect
        </Text>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default memo(BackGround);
const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  linearGradient: {flex: 1},
  container: {
    marginVertical: 10,
  },
});
