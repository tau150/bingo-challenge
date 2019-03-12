import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;

  p {
    border-radius: 50%;
    border: 1px solid #fff;
    font-weight: bold;
    color: #fff;
    width: 50px;
    height: 50px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ wasSelected }) => ('true' ? 'red' : '')};
  }
`;

const Ball = ({ number, wasSelected }) => {
  return (
    <StyledDiv>
      <p>
        {number} - {wasSelected}
      </p>
    </StyledDiv>
  );
};

export default Ball;
