import { getEmailError } from './getEmailError';
import { getFirstNameError } from './getFirstNameError';
import { getLastNameError } from './getLastNameError';
import { getPasswordError } from './getPasswordError';
import { getPhoneNumberError } from './getPhoneNumberError';

export const validateForm = (formData) => {
  const errors = {};

  const emailError = getEmailError(formData.email);
  if (emailError) errors.email = emailError;

  const firstNameError = getFirstNameError(formData.firstName);
  if (firstNameError) errors.firstName = firstNameError;

  const lastNameError = getLastNameError(formData.lastName);
  if (lastNameError) errors.lastName = lastNameError;

  const passwordError = getPasswordError(formData.password);
  if (passwordError) errors.password = passwordError;

  const phoneNumberError = getPhoneNumberError(formData.phoneNumber);
  if (phoneNumberError) errors.phoneNumber = phoneNumberError;

  return errors;
};
