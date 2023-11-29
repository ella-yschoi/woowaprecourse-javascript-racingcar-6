import { Console, Random } from '@woowacourse/mission-utils';

const printMessage = (message) => Console.print(message);

const throwError = (message) => {
  throw new Error(message);
};

const generateRandomNumber = (min, max) => Random.pickNumberInRange(min, max);

export { printMessage, throwError, generateRandomNumber }
