import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import OTPTextView from 'react-native-otp-textinput';
import navigationStrings from '../../constant/navigationStrings';
import {showMessage} from 'react-native-flash-message';
const VerifyOtp = props => {
  const {navigation} = props;
  const [otp, setOtp] = useState('');
  const verifyotp = () => {
    if (otp.length < 4) {
      showMessage({
        message: 'Please enter the OTP',
        type: 'warning',
      });
    } else {
      console.log(navigation, navigationStrings.BOTTOMTAB);
      navigation.replace(navigationStrings.BOTTOMTAB);
    }
  };
  return (
    <View className="flex-1 bg-white  items-center py-6 px-4">
      <Text className="text-black font-bold text-2xl self-center ">
        Enter your otp we have sent you on example@gmail.com
      </Text>
      <OTPTextView
        handleTextChange={text => {
          setOtp(text);
        }}
        containerStyle={styles.textInputContainer}
        textInputStyle={styles.roundedTextInput}
        tintColor="#30893b"
      />
      <TouchableOpacity
        onPress={verifyotp}
        className="bg-[#30893b] p-4 w-full mt-4 rounded-lg">
        <Text className="text-white font-bold text-2xl self-center">
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5,
    paddingVertical: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '60%',
    gap: 20,
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    letterSpacing: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
});
export default VerifyOtp;
