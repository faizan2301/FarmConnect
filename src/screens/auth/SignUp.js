import {
  Pressable,
  Text,
  StyleSheet,
  TextInput,
  View,
  Modal,
  useColorScheme,
} from 'react-native';
import React, {useState, useRef} from 'react';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BackGround from '../../components/SignUpBackground';
import LottieView from 'lottie-react-native';
import imageConstant from '../../constant/imageConstant';
import navigationStrings from '../../constant/navigationStrings';
import {
  secondaryButtonColor,
  secondaryDarkColor,
  secondaryLightColor,
  secondaryTextColor,
} from '../../constant/colors';
const SignUp = props => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  const {navigation} = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [mobileError, setMobileError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [focusedInput, setFocusedInput] = useState('');
  const [modalVal, setModalVal] = useState(false);
  const bounceAniref = useRef();
  const onLogin = () => {
    // Validate mobile number
    if (!/^[A-Za-z\s]+$/.test(name) || name.length < 2) {
      setNameError('Please enter a valid name');
      animate();
      return;
    } else {
      setNameError('');
    }
    if (!/^[A-Za-z\d._-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailError('Please enter a valid email');
      animate();
      return;
    } else {
      setEmailError('');
    }

    if (!/^\d{10}$/.test(mobileNumber)) {
      setMobileError('Please enter a valid 10-digit mobile number');
      animate();
      return;
    } else {
      setMobileError('');
    }

    if (password.length < 4) {
      // Validate password
      setPasswordError('Password must be at least 4 characters long');
      animate();
      return;
    } else {
      setPasswordError('');
    }
    setModalVal(true);
    const interval = setInterval(() => {
      clearInterval(interval);
      setModalVal(false);
      navigation.push(navigationStrings.VERIFYOTPSCREEN);
    }, 5000);
  };
  const animate = () => {
    bounceAniref.current.shake(800);
  };
  return (
    <BackGround>
      <Modal
        transparent={true}
        animationType={'none'}
        visible={modalVal}
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
      {/* <Text className="text-black text-xl mb-2">Name</Text> */}
      <TextInput
        style={[
          styles.input,
          focusedInput === 'name' && styles.inputFocused,
          nameError && styles.inputError,
          {
            backgroundColor: isDarkTheme
              ? secondaryDarkColor
              : secondaryLightColor,
            marginVertical: 20,
          },
        ]}
        placeholder="Name"
        keyboardType="ascii-capable"
        placeholderTextColor={secondaryTextColor}
        value={name}
        onFocus={() => setFocusedInput('name')}
        onBlur={() => setFocusedInput('')}
        onChangeText={text => {
          setName(text);
          setNameError('');
        }}
      />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
      {/* <Text className="text-black text-xl mb-2">Email</Text> */}
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
      {/* <Text className="text-black text-xl mb-2">Mobile number</Text> */}
      <TextInput
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
      {mobileError ? <Text style={styles.errorText}>{mobileError}</Text> : null}
      {/* <Text className="text-black text-xl my-2">Password</Text> */}
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
          style={styles.password}
          placeholder="Password"
          placeholderTextColor={secondaryTextColor}
          secureTextEntry={!showPassword}
          value={password}
          onFocus={() => setFocusedInput('password')}
          onBlur={() => setFocusedInput('')}
          onChangeText={text => {
            setPassword(text);
            setPasswordError('');
          }}
        />
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          className="self-center">
          <MaterialIcons
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={24}
            color="gray"
          />
        </Pressable>
      </View>
      {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}
      <Animatable.View ref={bounceAniref}>
        <Pressable
          onPress={onLogin}
          className="w-full bg-buttonColor p-4 mt-6 rounded-2xl items-center justify-center">
          <Text className="text-[#fff] text-xl">Register</Text>
        </Pressable>
      </Animatable.View>
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
  password: {color: 'black', flex: 1, fontSize: 18},
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
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
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
export default SignUp;
