import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  h5 {
    color: #fff;
    font-size: 50px;
  }
`;

const FinishedGame = () => {
  return (
    <StyledDiv>
      <h5>Game Finished, press spacebar to restart</h5>
    </StyledDiv>
  );
};

export default FinishedGame;
