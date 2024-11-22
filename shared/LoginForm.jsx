// components/LoginForm.js

import React from 'react';
import { Box, Button, VStack, Input, Text } from 'native-base';
import PropTypes from 'prop-types'; // Import PropTypes
const LoginForm = ({
  email,
  password,
  emailError,
  passwordError,
  setEmail,
  setPassword,
  setEmailError,
  setPasswordError,
  handleLogin,
  validateEmail,
  validatePassword,
  isLoginDisabled,
  loading,
  setForgotPasswordModalVisible,
}) => (
  <VStack space={4} alignItems='center' w='100%'>
    {/* Email Input */}
    <Box w='100%'>
      <Input
        title='Email'
        placeholder='Email'
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setEmailError(validateEmail(text) ? '' : 'Invalid email address');
        }}
        isInvalid={!!emailError}
        _invalid={{ borderColor: 'red.500', borderWidth: 1 }}
      />
      {emailError ? (
        <Text color='red.500' mt={1}>
          {emailError}
        </Text>
      ) : (
        email && (
          <Text color='green.500' mt={1}>
            Email looks good
          </Text>
        )
      )}
    </Box>

    {/* Password Input */}
    <Box w='100%'>
      <Input
        title='Password'
        placeholder='Password'
        type='password'
        value={password}
        showPasswordToggle
        onChangeText={(text) => {
          setPassword(text);
          setPasswordError(
            validatePassword(text)
              ? ''
              : 'Password must be at least 8 characters',
          );
        }}
        isInvalid={!!passwordError}
        _invalid={{ borderColor: 'red.500', borderWidth: 1 }}
      />
      {passwordError ? (
        <Text color='red.500' mt={1}>
          {passwordError}
        </Text>
      ) : (
        password && (
          <Text color='green.500' mt={1}>
            Password looks good
          </Text>
        )
      )}
    </Box>

    {/* Login Button */}
    <Button
      w='100%'
      onPress={handleLogin}
      isDisabled={isLoginDisabled}
      isLoading={loading}
    >
      Login
    </Button>

    {/* Forgot Password Link */}
    <Button variant='link' onPress={() => setForgotPasswordModalVisible(true)}>
      Forgot Password?
    </Button>
  </VStack>
);

// Add PropTypes validation
LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setEmailError: PropTypes.func.isRequired,
  setPasswordError: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  validateEmail: PropTypes.func.isRequired,
  validatePassword: PropTypes.func.isRequired,
  isLoginDisabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  setForgotPasswordModalVisible: PropTypes.func.isRequired,
};

// Set default props if needed (optional)
LoginForm.defaultProps = {
  emailError: '',
  passwordError: '',
};

export default LoginForm;
