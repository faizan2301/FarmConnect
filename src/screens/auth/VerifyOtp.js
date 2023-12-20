import {View, Text, StyleSheet, Pressable, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import OTPTextView from 'react-native-otp-textinput';
import navigationStrings from '../../constant/navigationStrings';
import {showMessage} from 'react-native-flash-message';
import {buttonColor} from '../../constant/colors';
import {useVerifyOtpApiMutation} from '../../redux/api/api';
import {errorMessage, handleResponse} from '../../common/functions';

const VerifyOtp = props => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  const {
    navigation,
    route: {params},
  } = props;
  const [otp, setOtp] = useState('');
  const [verifyOtpApi, {isError, isLoading}] = useVerifyOtpApiMutation();
  const verifyotp = async () => {
    if (otp.length < 4) {
      showMessage({
        message: 'Please enter the OTP',
        type: 'warning',
        icon: 'warning',
      });
    } else {
      var body = {otp};
      var response = await verifyOtpApi(body);
      handleResponse(response, false, res => {
        console.log(res);
        if (res.success == true) {
          showMessage({
            message: 'Verification successfull please login',
            type: 'success',
            icon: 'success',
          });
          navigation.replace(navigationStrings.LOGINSCREEN);
        } else {
          errorMessage();
        }
      });
    }
  };

  return (
    <View className="flex-1 bg-primaryLightColor dark:bg-primaryDarkColor   items-center py-6 px-4">
      <Text className="text-black dark:text-white  text-2xl self-center ">
        Enter your otp we have sent you on{' '}
        <Text className={`text-secondaryButtonColor`}>{params.email}</Text>
      </Text>
      <OTPTextView
        handleTextChange={text => {
          setOtp(text);
        }}
        containerStyle={styles.textInputContainer}
        textInputStyle={[
          styles.roundedTextInput,
          {color: isDarkTheme ? 'white' : 'black'},
        ]}
        tintColor={buttonColor}
      />
      <Pressable
        onPress={verifyotp}
        className="bg-buttonColor p-3 w-full mt-4 rounded-lg">
        <Text className="text-white  text-2xl self-center">Submit</Text>
      </Pressable>
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
