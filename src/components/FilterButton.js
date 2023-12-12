/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, Text, StyleSheet, Image} from 'react-native';

const FilterButton = ({item, onPress, isSelected}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        // Adjust width as needed
        height: 90,
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 12,
        marginVertical: 2,
        backgroundColor: item.color,
        padding: 20,
        borderRadius: 20,
        borderColor: isSelected ? '#000' : 'transparent',
        borderWidth: 1,
      }}>
      <Image source={item.icon} className={`h-10 w-10`} />
      <Text className="text-secondaryTextColor text-sm  " style={[styles.text]}>
        {item.title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    // Adjust width as needed
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#FEE2FF',
    padding: 5,
  },
});

export default FilterButton;
