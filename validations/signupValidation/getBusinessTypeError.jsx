// validations/BusinessTypeValidation.js
export const getBusinessTypeError = (selectedBusinessTypes) => {
  return selectedBusinessTypes.length === 0
    ? 'At least one business type must be selected.'
    : null;
};
