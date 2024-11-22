import React from 'react';
import { Box, Button } from 'native-base';
import PropTypes from 'prop-types'; // Import PropTypes for validation

const SignupNavigation = ({ handleCreateAccount }) => (
  <Box>
    <Button variant='link' onPress={() => handleCreateAccount('client')}>
      Create Account as Client
    </Button>
    <Button variant='link' onPress={() => handleCreateAccount('shop')}>
      Create Account as Shop Owner
    </Button>
  </Box>
);

// Define prop types
SignupNavigation.propTypes = {
  handleCreateAccount: PropTypes.func.isRequired,
};

export default SignupNavigation;
