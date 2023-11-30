import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR, REGEX } from './constants.js';

const printMessage = (message) => Console.print(message);

const throwError = (message) => {
  throw new Error(`${ERROR.prefix}${message}`);
};

const generateRandomNumber = (min, max) => Random.pickNumberInRange(min, max);

const isUniqueValue = (input) => {
  const value = input.split(',').map(name => name.trim());
  return value.length === new Set(value).size;
};

const isSeperatedByComma = (input) => {
  return REGEX.allowed_name.test(input);
};

const isNumeric = (input) => {
  return REGEX.allowed_count.test(input);
};

export { printMessage, throwError, generateRandomNumber, isUniqueValue, isSeperatedByComma, isNumeric }
