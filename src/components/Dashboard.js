import React, { Component } from 'react';
import styled from 'styled-components';
import Ball from './Ball';

const SyledDiv = styled.div`
  background: blue;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

let numbers = [...Array(101).keys()];

class Dashboard extends Component {
  render() {
    return (
      <SyledDiv>
        {numbers.map(number => (
          <Ball number={number} />
        ))}
      </SyledDiv>
    );
  }
}

export default Dashboard;
