// CustomCheckbox.js
import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'native-base';

const CustomCheckbox = ({
  value = 'male',
  isChecked,
  onChange,
  children,
  _checked,
  ...props
}) => {
  return (
    <Checkbox
      value={value}
      isChecked={isChecked} // Now takes an isChecked prop directly
      onChange={onChange} // Takes an onChange function
      _checked={_checked}
      {...props} // Allows passing custom styling for checked state
    >
      {children}
    </Checkbox>
  );
};

CustomCheckbox.propTypes = {
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired, // Checks if it should be checked
  onChange: PropTypes.func.isRequired, // Handles the change action
  children: PropTypes.node.isRequired, // Text label for the checkbox
  _checked: PropTypes.object,
};

CustomCheckbox.defaultProps = {
  _checked: { bg: 'primary.500' }, // Default checked color
};

export default CustomCheckbox;
