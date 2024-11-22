// components/EmailValidation.js

import useShowToast from '../../customHooks/showToast'; // Assuming you have a custom hook for toasts
import { validateEmail } from '../../shared/InputValidations'; // Assuming you have an email validation function

const EmailValidation = ({ email, setEmailError }) => {
  const showToast = useShowToast();

  const validate = () => {
    if (!validateEmail(email)) {
      showToast('Login', 'Invalid email address', 'error');
      setEmailError('Invalid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  return { validate };
};

export default EmailValidation;
