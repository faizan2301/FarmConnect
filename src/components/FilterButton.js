/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const FilterButton = ({title, onPress, isSelected}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: isSelected ? '#964b00' : '#C1C0C8'},
      ]}>
      <Text style={[styles.text, {color: isSelected ? 'white' : '#444262'}]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: 100, // Adjust width as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    marginHorizontal: 8,
    marginVertical: 4,
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
  },
});

export default FilterButton;
