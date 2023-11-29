import { GAME, REGEX } from './constants.js';

// 자동차 이름 유효성 검사
const isUniqueCarName = (input) => {
  const names = input.split(',').map(name => name.trim());
  return names.length === new Set(names).size;
};

const isSeperatedByComma = (input) => {
  return REGEX.allowed_name.test(input);
};

const isValidCarName = (input) => {
  const carNames = input.split(',').map(name => name.trim().toUpperCase());
  return (
    isSeperatedByComma(input)
    && carNames.length >= GAME.min_length
    && carNames.every(name => name.length <= GAME.max_length)
    && !carNames.includes('')
    && isUniqueCarName(carNames.join(','))
  );
};

// 시도 횟수 유효성 검사
const isNumericTryCount = (input) => REGEX.allowed_count.test(input);

const isValidTryCount = (input) => (
  input.toString().length >= GAME.min_try_count
  && isNumericTryCount(input)
);

export { isValidCarName, isValidTryCount }
