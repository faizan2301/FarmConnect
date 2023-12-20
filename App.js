import React from 'react';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/navigations/Routes';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView className="flex-1 bg-white">
        <Routes />
        <FlashMessage position="bottom" style={{paddingBottom: 10}} />
      </SafeAreaView>
    </Provider>
  );
};
export default App;
