import React, { Component } from 'react';
import styled from 'styled-components';
import Ball from './Ball';
import _ from 'lodash';

const BallsContainer = styled.div`
  background: #d2843c;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
`;

const ControlsContainer = styled.div`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(171, 171, 171, 1) 100%
  );
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: #777;
    font-size: 50px;
    cursor: pointer;
  }
`;

let numbers = _.range(1, 91);

class Dashboard extends Component {
  state = {
    randomNumber: null,
    selectedNumbers: [],
  };

  handleNextNumber = () => {
    let randomNumber = _.random(1, 90);

    this.setState({
      randomNumber: randomNumber,
      selectedNumbers: [...this.state.selectedNumbers, randomNumber],
    });
  };

  render() {
    console.log(this.state.selectedNumbers);

    return (
      <div onKeyDown={this.handleNextNumber} tabIndex="0">
        <BallsContainer>
          {numbers.map(number => (
            <Ball
              number={number}
              key={number}
              wasSelected={
                this.state.selectedNumbers.includes(number) ? true : false
              }
            />
          ))}
        </BallsContainer>
        <ControlsContainer>
          <i onClick={this.handleNextNumber} className="far fa-play-circle" />
        </ControlsContainer>
      </div>
    );
  }
}

export default Dashboard;
