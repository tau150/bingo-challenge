import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: red;
  border-radius: 50%;
  width: 50px;
  heigth: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Ball = () => {
  return (
    <StyledDiv>
      <p>1</p>
    </StyledDiv>
  );
};

export default Ball;
