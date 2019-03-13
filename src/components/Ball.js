import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;

  p {
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    opacity: 0.7;
    animation: ${({ wasSelected }) =>
      wasSelected ? ' border 1s ease 1 forwards' : ''};
    color: #fff;

    width: ${({ active }) => (active ? '100px' : '50px')};
    height: ${({ active }) => (active ? '100px' : '50px')};
    font-size: ${({ active }) => (active ? '60px' : '')};
    // width: 50px;
    // height: 50px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @keyframes border {
      0% {
        backround: #ec5445;
      }
      25% {
        opacity: 0.25;
        border-color: rgba(255, 255, 255, 0.25);
      }
      50% {
        opacity: 0.5;
        border-color: rgba(255, 255, 255, 0.5);
      }
      75% {
        opacity: 0.75;
        border-color: rgba(255, 255, 255, 0.75);
      }
      100% {
        background: rgb(255, 197, 120); /* Old browsers */
        background: -moz-radial-gradient(
          center,
          ellipse cover,
          rgba(255, 197, 120, 1) 0%,
          rgba(251, 157, 35, 1) 100%
        ); /* FF3.6-15 */
        background: -webkit-radial-gradient(
          center,
          ellipse cover,
          rgba(255, 197, 120, 1) 0%,
          rgba(251, 157, 35, 1) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(
          ellipse at center,
          rgba(255, 197, 120, 1) 0%,
          rgba(251, 157, 35, 1) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      }
    }
  }
`;

const Ball = ({ number, wasSelected, active }) => {
  return (
    <StyledDiv active={active} wasSelected={wasSelected}>
      <p>{number}</p>
    </StyledDiv>
  );
};

export default Ball;
