import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;


  p {
    border-radius: 50%;
    background: ${({ wasSelected }) => (wasSelected ? '#ec5445' : 'red')};
    border: 1px solid #fff;
    font-weight: bold;
    color: #fff;
    width: 50px;
    height: 50px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;



`;

const Ball = ({ number, wasSelected }) => {
  return (
    <StyledDiv>
      <p>
        {number} {wasSelected ? 'SI' : ''}
      </p>
    </StyledDiv>
  );
};

export default Ball;
