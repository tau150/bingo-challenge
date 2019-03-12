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
    selectedNumbers: []
  };

  handleNextNumber = () => {
    let randomNumber = _.random(1, 90);

    // let uniqueNumbers = Array.from(
    //   new Set(...this.state.selectedNumbers, randomNumber)
    // );

    this.setState({
      randomNumber: randomNumber,
      selectedNumbers: [...this.state.selectedNumbers, randomNumber]
    });
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <BallsContainer>
          {numbers.map(number => (
            <Ball
              number={number}
              wasSelected={
                this.state.selectedNumbers.includes(number) === Number(number)
                  ? 'true'
                  : 'false'
              }
            />
          ))}
        </BallsContainer>
        <ControlsContainer>
          {this.state.randomNumber ? (
            this.state.randomNumber
          ) : (
            <i onClick={this.handleNextNumber} className="far fa-play-circle" />
          )}
        </ControlsContainer>
      </React.Fragment>
    );
  }
}

export default Dashboard;
