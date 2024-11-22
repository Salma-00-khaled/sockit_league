// validations/EmailValidation.js
import { validateEmail } from '../../shared/InputValidations';

export const getEmailError = (email) => {
  return !validateEmail(email) ? 'Email is not valid.' : null;
};
