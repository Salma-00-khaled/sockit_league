// validations/PhoneNumberValidation.js
import { validatePhoneNumber } from '../../shared/InputValidations';

export const getPhoneNumberError = (phoneNumber) => {
  return !validatePhoneNumber(phoneNumber)
    ? 'Phone number should be 10 digits.'
    : null;
};
