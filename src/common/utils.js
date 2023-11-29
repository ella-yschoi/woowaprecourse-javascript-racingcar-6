import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR } from './constants';

const printMessage = (message) => Console.print(message);

const throwError = (message) => {
  throw new Error(`${ERROR.prefix}${message}`);
};

const generateRandomNumber = (min, max) => Random.pickNumberInRange(min, max);

export { printMessage, throwError, generateRandomNumber }
