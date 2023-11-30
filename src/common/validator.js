import { GAME } from './constants.js';
import { isNumeric, isSeperatedByComma, isUniqueValue } from './utils';

const isValidCarName = (input) => {
  const carNames = input.split(',').map(name => name.trim().toUpperCase());
  return (
    isSeperatedByComma(carNames)
    && carNames.length >= GAME.zero
    && carNames.every(name => name.length <= GAME.max_length)
    && !carNames.includes('')
    && isUniqueValue(carNames.join(','))
  )
}

const isValidTryCount = (input) => {
  input.toString().length >= GAME.min_try_count
  && isNumeric(input)
}

export { isValidCarName, isValidTryCount };