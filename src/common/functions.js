import {showMessage} from 'react-native-flash-message';
import {someThingWentWrong, successMessage} from '../constant/strings';

export const handleResponse = (
  response,
  toShowSuccessMessage,
  successCallback,
) => {
  console.log(response);
  if (response.data) {
    console.log('If', response.data);
    if (toShowSuccessMessage === true) {
      showMessage({
        message: response.data.message ?? successMessage,
        type: 'success',
      });
    }

    // Call the success callback if provided
    if (successCallback && typeof successCallback === 'function') {
      successCallback(response.data);
    }
    return response.data;
  } else if (response.error && response.error.data) {
    console.log('else if');
    showMessage({
      message: response.error.data.message ?? someThingWentWrong,
      type: 'danger',
    });
  } else {
    console.log('else if');
    errorMessage();
  }
};
export const errorMessage = () => {
  showMessage({
    message: someThingWentWrong,
    type: 'danger',
  });
};
