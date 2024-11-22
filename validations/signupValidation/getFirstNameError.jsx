// validations/FirstNameValidation.js
import { validateName } from '../../shared/InputValidations';

export const getFirstNameError = (firstName) => {
  return !validateName(firstName)
    ? 'First name should contain only letters.'
    : null;
};
