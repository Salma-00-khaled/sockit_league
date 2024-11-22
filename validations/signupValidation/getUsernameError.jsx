// validations/UsernameValidation.js
import { validateName } from "../../shared/InputValidations";

export const getUsernameError = (username) => {
  return !validateName(username)
    ? "Username should be at least 3 characters and contain only letters and numbers."
    : null;
};
