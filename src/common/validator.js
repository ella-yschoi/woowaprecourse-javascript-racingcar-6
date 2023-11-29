import { GAME } from './constants.js';

// 자동차 이름 유효성 검사
const isUniqueCarName = (input) => {
  const names = input.split(',').map(name => name.trim());
  return names.length === new Set(names).size;
};

const isValidCarName = (input) => {
  const carNames = input.split(',').map(name => name.trim().toUpperCase());
  return (
    carNames.length >= GAME.min_length &&
    carNames.every(name => name.length <= GAME.max_length) &&
    !carNames.includes('') &&
    isUniqueCarName(carNames.join(','))
  );
};

// 시도 횟수 유효성 검사
const isNumericTryCount = (input) => /^[1-9]\d*$/.test(input);

const isValidTryCount = (input) => (
  input.toString().length >= GAME.min_try_count && isNumericTryCount(input)
);

export { isUniqueCarName, isValidCarName, isNumericTryCount, isValidTryCount }
