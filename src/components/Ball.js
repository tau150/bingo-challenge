import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: red;
  border-radius: 50%;
  width: 100px;
  heigth: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Ball = ({ number }) => {
  return (
    <StyledDiv>
      <p>{number}</p>
    </StyledDiv>
  );
};

export default Ball;
