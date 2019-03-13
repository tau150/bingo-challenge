import _ from 'lodash';

export const getRandomNumber = (selectedNumbers, initialNumbers) => {
  let randomNumber = _.sample(initialNumbers);

  while (selectedNumbers.includes(randomNumber)) {
    randomNumber = _.sample(initialNumbers);
  }

  return randomNumber;
};
