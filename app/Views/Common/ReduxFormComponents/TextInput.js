
import React from 'react';
import styled from 'styled-components';

export const TextInputField = ({ disabled, id, input, placeholder }) => {
  return (
    <input
      {...input}
      className='form-control'
      disabled={disabled}
      id={id}
      placeholder={placeholder}
      type='text'
    />
  );
};

export default styled(TextInputField)`
`;
