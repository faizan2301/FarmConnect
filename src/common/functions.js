import {showMessage} from 'react-native-flash-message';
import {someThingWentWrong, successMessage} from '../constant/strings';
import {showError, showSuccess} from '../utils/helper';

export const handleResponse = (
  response,
  toShowSuccessMessage,
  successCallback,
) => {
  console.log('Handle response', response);
  if (response.data) {
    if (toShowSuccessMessage === true) {
      showSuccess(response.data.message ?? successMessage);
    }

    // Call the success callback if provided
    if (successCallback && typeof successCallback === 'function') {
      successCallback(response.data);
    }
    return response.data;
  } else if (response.error && response.error.data) {
    showError(response.error.data.message ?? someThingWentWrong);
  } else {
    errorMessage();
  }
};
export const errorMessage = () => {
  showMessage({
    message: someThingWentWrong,
    type: 'danger',
    icon: 'danger',
  });
};
