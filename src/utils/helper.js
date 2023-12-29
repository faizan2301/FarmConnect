/* eslint-disable react-hooks/rules-of-hooks */
import {showMessage} from 'react-native-flash-message';
import {useSelector} from 'react-redux';
import React from 'react';
const showError = message => {
  showMessage({
    type: 'danger',
    icon: 'danger',
    message,
  });
};

const showSuccess = message => {
  showMessage({
    type: 'success',
    icon: 'success',
    message,
  });
};
const showWarning = message => {
  showMessage({
    type: 'warning',
    icon: 'warning',
    message,
  });
};

export {showError, showSuccess, showWarning};
