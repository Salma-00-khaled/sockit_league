// validations/LastNameValidation.js
import { validateName } from '../../shared/InputValidations';

export const getLastNameError = (lastName) => {
  return !validateName(lastName)
    ? 'Last name should contain only letters.'
    : null;
};
