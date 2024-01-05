import {Pressable, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {FAB} from 'react-native-paper';
import {secondaryButtonColor} from '../../../constant/colors';
const SellScreen = () => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    <View className="flex-1 bg-primaryLightColor dark:bg-primaryDarkColor p-4">
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
      />
      <Text className="text-xl text-primaryLightTxtColor dark:text-primaryDarkTxtColor">
        Uploaded products
      </Text>
    </View>
  );
};

export default SellScreen;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 60,
    backgroundColor: secondaryButtonColor,
  },
});
