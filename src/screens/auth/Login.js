import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Pressable,
  useColorScheme,
} from 'react-native';
import React, {useState, useRef} from 'react';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BackGround from '../../components/Background';
import LottieView from 'lottie-react-native';
import imageConstant from '../../constant/imageConstant';
import navigationStrings from '../../constant/navigationStrings';
import {
  secondaryButtonColor,
  secondaryDarkColor,
  secondaryLightColor,
  secondaryTextColor,
} from '../../constant/colors';
import {useLoginApiMutation} from '../../redux/api/api';
import {errorMessage, handleResponse} from '../../common/functions';
import {saveCredentials} from '../../common/AsyncStorageFunctions';
import {useDispatch} from 'react-redux';
import {saveToken} from '../../redux/slice/tokenSlice';
import {saveUserData} from '../../redux/slice/authSlice';
const Login = props => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  const {navigation} = props;
  // const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // const [mobileError, setMobileError] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [focusedInput, setFocusedInput] = useState('');
  const [loginApi, {isError, isLoading, error, data}] = useLoginApiMutation();
  const dispatch = useDispatch();
  const bounceAniref = useRef();
  const onPress = () => {
    navigation.push(navigationStrings.SIGNUPSCREEN);
  };
  const onLogin = () => {
    // Validate mobile number
    // if (!/^\d{10}$/.test(mobileNumber)) {
    //   setMobileError('Please enter a valid 10-digit mobile number');
    //   animate();
    //   return;
    // }
    if (!/^[A-Za-z\d._-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailError('Please enter a valid email');
      animate();
      return;
    } else {
      setEmailError('');
    }
    // Validate password
    if (password.length < 4) {
      setPasswordError('Password must be at least 4 characters long');
      animate();
      return;
    } else {
      setPasswordError('');
    }
    login();
  };
  const login = async () => {
    var body = {
      email,
      password,
    };
    var response = await loginApi(body);
    handleResponse(response, false, res => {
      saveCredentialsAndLogin(res);
    });
  };
  const saveCredentialsAndLogin = async credentials => {
    var isSaved = await saveCredentials(credentials);
    dispatch(saveToken(credentials.access_token));
    dispatch(saveUserData(credentials.user));
    if (isSaved) {
      navigation.replace(navigationStrings.BOTTOMTAB);
    } else {
      errorMessage();
    }
  };
  const animate = () => {
    bounceAniref.current.shake(800);
  };
  return (
    <BackGround>
      <Modal
        transparent={true}
        animationType={'none'}
        visible={isLoading}
        style={{zIndex: 1100}}
        onRequestClose={() => {}}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            {/* <ActivityIndicator animating={true} color="black" /> */}
            <LottieView
              style={styles.lottieStyle}
              source={imageConstant.lottieLoader}
              autoPlay
              loop
            />
          </View>
        </View>
      </Modal>

      {/* <Text className="text-primaryLightTxtColor dark:text-primaryDarkTxtColor text-xl mb-2 mt-4">
        Mobile number
      </Text> */}
      {/* <TextInput
        style={[
          styles.input,
          focusedInput === 'mobile' && styles.inputFocused,
          mobileError && styles.inputError,
          {
            backgroundColor: isDarkTheme
              ? secondaryDarkColor
              : secondaryLightColor,
            marginVertical: 20,
          },
        ]}
        placeholder="Mobile Number"
        keyboardType="numeric"
        placeholderTextColor={secondaryTextColor}
        maxLength={10}
        value={mobileNumber}
        onFocus={() => setFocusedInput('mobile')}
        onBlur={() => setFocusedInput('')}
        onChangeText={text => {
          setMobileNumber(text);
          setMobileError('');
        }}
      />
      {mobileError ? <Text style={styles.errorText}>{mobileError}</Text> : null} */}
      {/* <Text className="text-primaryLightTxtColor dark:text-primaryDarkTxtColor text-xl my-2">
        Password
      </Text> */}
      <TextInput
        style={[
          styles.input,
          focusedInput === 'email' && styles.inputFocused,
          emailError && styles.inputError,
          {
            backgroundColor: isDarkTheme
              ? secondaryDarkColor
              : secondaryLightColor,
            marginVertical: 20,
            color: isDarkTheme ? 'white' : 'black',
          },
        ]}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor={secondaryTextColor}
        value={email}
        onFocus={() => setFocusedInput('email')}
        onBlur={() => setFocusedInput('')}
        onChangeText={text => {
          setEmail(text);
          setEmailError('');
        }}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <View
        style={[
          styles.input,
          focusedInput === 'password' && styles.inputFocused,
          passwordError && styles.inputError,
          {
            backgroundColor: isDarkTheme
              ? secondaryDarkColor
              : secondaryLightColor,
            marginVertical: 20,
          },
        ]}>
        <TextInput
          style={[styles.password, {color: isDarkTheme ? 'white' : 'black'}]}
          placeholder="Password"
          secureTextEntry={!showPassword}
          placeholderTextColor={secondaryTextColor}
          value={password}
          onFocus={() => setFocusedInput('password')}
          onBlur={() => setFocusedInput('')}
          onChangeText={text => {
            setPassword(text);
            setPasswordError('');
          }}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          className="self-center">
          <MaterialIcons
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}
      <Animatable.View ref={bounceAniref}>
        <Pressable
          onPress={onLogin}
          className="w-full bg-buttonColor p-4 mt-6 rounded-lg items-center justify-center">
          <Text className="text-white text-xl">Login</Text>
        </Pressable>
      </Animatable.View>
      <Text
        className={`text-primaryLightTxtColor dark:text-primaryDarkTxtColor text-lg self-center my-12 underline`}>
        Forgot password
      </Text>
      <Text className="text-primaryLightTxtColor dark:text-primaryDarkTxtColor text-lg self-center items-center justify-center-center mt-4">
        Don't have an account?{'  '}
        <Text onPress={onPress} className="text-buttonColor  font-bold">
          Register
        </Text>
      </Text>
    </BackGround>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },

  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    height: 50,
    fontSize: 18,

    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  password: {flex: 1, fontSize: 18},
  inputFocused: {
    borderColor: secondaryButtonColor, // Change to your desired color
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loginButtonContainer: {
    alignSelf: 'center',
    width: '100%',
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(250, 250, 250, 0.5)',
    zIndex: 1000,
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieStyle: {height: 200, width: 200, alignSelf: 'center'},
});
export default Login;
