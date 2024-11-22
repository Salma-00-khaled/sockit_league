export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validateName = (name) => /^[a-zA-Z]+$/.test(name);

export const validatePhoneNumber = (phoneNumber) => {
  if (!String(phoneNumber)) return;
  // Normalize the phone number by removing spaces, dashes, and parentheses
  const normalizedNumber = String(phoneNumber).replace(/[\s()-]/g, '');

  // Regular expression to match phone numbers with optional country code
  const phoneRegex =
    /^(?:\+?\d{1,3})?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  // Validate the phone number format
  if (!phoneRegex.test(phoneNumber)) {
    return false;
  }

  // Ensure the normalized phone number length is between 10 and 15 digits
  return normalizedNumber.length >= 10 && normalizedNumber.length <= 15;
};
