import React from 'react'; // Import React at the top of the file
import PropTypes from 'prop-types';
import { Radio } from 'native-base';

const CustomRadio = ({
  value,
  label,
  selectedValue,
  onValueChange,
  ...props
}) => {
  return (
    <Radio
      value={value}
      isChecked={selectedValue === value}
      onChange={() => onValueChange(value)}
      my={1}
      _text={{ fontSize: 'md' }}
      aria-label={label}
      {...props}
    >
      {label}
    </Radio>
  );
};

CustomRadio.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default CustomRadio;
