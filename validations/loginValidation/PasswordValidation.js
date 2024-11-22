// components/PasswordValidation.js

import useShowToast from '../../customHooks/showToast'; // Assuming you have a custom hook for toasts
import { validatePassword } from '../../shared/InputValidations'; // Assuming you have a password validation function

const PasswordValidation = ({ password, setPasswordError }) => {
  const showToast = useShowToast();

  const validate = () => {
    if (!validatePassword(password)) {
      showToast('Login', 'Password must be at least 8 characters', 'error');
      setPasswordError('Password must be at least 8 characters');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  return { validate };
};

export default PasswordValidation;
