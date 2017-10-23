
import React from 'react';
import styled from 'styled-components';

export const InputGroup = (props) => {
  const {
    className,
    input,
    button
  } = props;

  return (
    <div className={`input-group ${className}`}>
      {input}
      <span className='input-group-btn'>
        {button}
      </span>
    </div>
  );
};

export default styled(InputGroup)`
`;
