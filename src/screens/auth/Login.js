import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  View,
  Modal,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useRef} from 'react';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BackGround from '../../components/Background';
import LottieView from 'lottie-react-native';
import imageConstant from '../../constant/imageConstant';
import navigationStrings from '../../constant/navigationStrings';
const Login = props => {
  const {navigation} = props;
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
    if (!/^\d{10}$/.test(mobileNumber)) {
      setMobileError('Please enter a valid 10-digit mobile number');
      animate();
      return;
    }

    // Validate password
    if (password.length < 4) {
      setPasswordError('Password must be at least 4 characters long');
      animate();
      return;
    }
    setModalVal(true);
    const interval = setInterval(() => {
      clearInterval(interval);
      setModalVal(false);
      navigation.replace(navigationStrings.DELIVERYBOTTOMTAB);
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
      <Text className="text-black text-xl mb-2">Mobile number</Text>
      <TextInput
        style={[
          styles.input,
          focusedInput === 'mobile' && styles.inputFocused,
          mobileError && styles.inputError,
        ]}
        placeholder="Mobile Number"
        keyboardType="numeric"
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
      <Text className="text-black text-xl my-2">Password</Text>
      <View
        style={[
          styles.input,
          focusedInput === 'password' && styles.inputFocused,
          passwordError && styles.inputError,
        ]}>
        <TextInput
          style={styles.password}
          placeholder="Password"
          secureTextEntry={!showPassword}
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
        <TouchableOpacity
          onPress={onLogin}
          className="w-full bg-[#00619A] p-4 mt-6 rounded-lg items-center justify-center">
          <Text className="text-[#fff] text-xl">Login</Text>
        </TouchableOpacity>
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
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  password: {color: 'black', flex: 1, fontSize: 18},
  inputFocused: {
    borderColor: '#00619A', // Change to your desired color
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
export default Login;
