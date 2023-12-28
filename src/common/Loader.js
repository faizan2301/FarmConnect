import {StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import imageConstant from '../constant/imageConstant';

const Loader = ({isLoading}) => {
  return (
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
  );
};

export default Loader;

const styles = StyleSheet.create({
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
