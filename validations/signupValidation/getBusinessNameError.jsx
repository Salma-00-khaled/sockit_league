// validations/BusinessNameValidation.js
import { validateName } from '../../shared/InputValidations';

export const getBusinessNameError = (businessName) => {
  return !validateName(businessName)
    ? 'Business name should contain only letters.'
    : null;
};
