import { GAME } from './constants.js';
import { isNumeric, isSeperatedByComma, isUniqueValue } from './utils.js';

const isValidCarName = (input) => {
  if (!input) {
    return false;
  }

  if (!isSeperatedByComma(input)) {
    return false;
  }

  const carNames = input.split(',').map(name => name.trim().toUpperCase());
  return (
    carNames.every(name => name.length <= GAME.max_length && name)
    && isUniqueValue(carNames.join(','))
  )
}

const isValidTryCount = (input) => {
  return isNumeric(input) && input >= GAME.min_try_count;
}

export { isValidCarName, isValidTryCount }
