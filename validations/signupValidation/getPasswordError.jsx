// validations/PasswordValidation.js
import { validatePassword } from '../../shared/InputValidations';

export const getPasswordError = (password) => {
  return !validatePassword(password)
    ? 'Password should be at least 8 characters.'
    : null;
};
