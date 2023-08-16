import {SafeAreaView} from 'react-native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/navigations/Routes';
const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Routes />
      <FlashMessage position="bottom" />
    </SafeAreaView>
  );
};
export default App;
