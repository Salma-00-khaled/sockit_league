// validations/GenderValidation.js
export const getGenderError = (gender) => {
  return !gender ? 'Gender is required.' : null;
};
