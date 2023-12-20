'use strict';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  credentialsKey,
  tokenKey,
  firebaseTokenKey,
  refreshTokenKey,
} from '../constant/strings';
export const saveCredentials = async value => {
  try {
    await saveTokentoAsync(value.access_token);
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(credentialsKey, jsonValue);
    return true;
  } catch (e) {
    console.log(e.toString());
    return false;
  }
};
export const saveTokentoAsync = async token => {
  try {
    await AsyncStorage.setItem(tokenKey, token);
    return true;
  } catch (e) {
    console.log(e.toString());
    return false;
  }
};
export const saveRefreshTokentoAsync = async token => {
  try {
    await AsyncStorage.setItem(refreshTokenKey, token);
    return true;
  } catch (e) {
    console.log(e.toString());
    return false;
  }
};

export const getCredentials = async () => {
  try {
    const value = await AsyncStorage.getItem(credentialsKey);
    if (value != null) {
      return JSON.parse(value);
    } else {
      return false;
    }
  } catch (e) {
    console.log(e.toString());
    return false;
  }
};
export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem(tokenKey);
    if (value != null) {
      return value;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e.toString());
    return false;
  }
};

export const saveFirebaseToken = async token => {
  try {
    await AsyncStorage.setItem(firebaseTokenKey, token);
    return true;
  } catch (e) {
    console.log(e.toString());
    return false;
  }
};
export const getFirebaseToken = async () => {
  try {
    const value = await AsyncStorage.getItem(firebaseTokenKey);
    if (value != null) {
      return value;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e.toString());
    return false;
  }
};
