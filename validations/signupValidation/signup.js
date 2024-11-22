export const isFormValid = (errors, formData) => {
  const { password, email, username } = formData;

  return email && password && username && Object.keys(errors).length === 0;
};
