import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { getRandomNumber } from './../utils';
import Ball from './Ball';
import FinishedGame from './FinishedGame';

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

class Dashboard extends Component {
  state = {
    randomNumber: null,
    initialNumbers: _.range(1, 91),
    selectedNumbers: [],
    started: false,
    finished: false
  };

  handleNextNumber = e => {
    if (e.keyCode === 32) {
      this.handleReset();
      return;
    }

    if (
      _.isEmpty(_.xor(this.state.selectedNumbers, this.state.initialNumbers))
    ) {
      this.setState({
        finished: true
      });

      return;
    }

    if (!this.state.started) return;

    if (e.keyCode === 39) {
      let randomNumber = getRandomNumber(
        this.state.selectedNumbers,
        this.state.initialNumbers
      );

      this.setState({
        randomNumber: randomNumber,
        selectedNumbers: [...this.state.selectedNumbers, randomNumber],
        started: true
      });
    }
  };

  handleReset = () => {
    this.setState({
      randomNumber: null,
      selectedNumbers: [],
      started: false,
      finished: false
    });
  };

  handleStart = () => {
    let randomNumber = _.sample(this.state.initialNumbers);

    this.setState({
      randomNumber: randomNumber,
      selectedNumbers: [...this.state.selectedNumbers, randomNumber],
      started: true
    });
  };

  render() {
    return (
      <div onKeyDown={this.handleNextNumber} tabIndex="0">
        <BallsContainer>
          {this.state.initialNumbers.map(number => (
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
          {this.state.randomNumber ? (
            <Ball
              number={this.state.randomNumber}
              active={true}
              wasSelected={true}
            />
          ) : (
            <i onClick={this.handleStart} className="far fa-play-circle" />
          )}
        </ControlsContainer>

        {this.state.finished ? <FinishedGame /> : ''}
      </div>
    );
  }
}

export default Dashboard;
