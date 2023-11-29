import { GAME } from './constants.js';
import { isUniqueValue, isSeperatedByComma, isNumeric } from './utils.js';

const isValidCarName = (input) => {
  const carNames = input.split(',').map(name => name.trim().toUpperCase());
  return (
    isSeperatedByComma(input)
    && carNames.length >= GAME.min_length
    && carNames.every(name => name.length <= GAME.max_length)
    && !carNames.includes('')
    && isUniqueValue(carNames.join(','))
  );
};

const isValidTryCount = (input) => (
  input.toString().length >= GAME.min_try_count
  && isNumeric(input)
);

export { isValidCarName, isValidTryCount }
