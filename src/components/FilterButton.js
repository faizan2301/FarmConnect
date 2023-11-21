/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, Text, StyleSheet, View} from 'react-native';

const FilterButton = ({title, onPress, isSelected}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button]}>
      <Text className="text-black dark:text-white" style={[styles.text]}>
        {title}
      </Text>
      {isSelected ? (
        <View className="h-1 bg-[#f49c07] w-7 mt-1 rounded-sm" />
      ) : (
        <View />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: 110, // Adjust width as needed

    alignItems: 'center',

    marginVertical: 4,
  },
  text: {
    fontSize: 16,
  },
});

export default FilterButton;
