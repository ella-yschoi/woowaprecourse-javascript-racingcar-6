import { printMessage } from '../common/utils.js';
import { GAME_SETTING, LOG_MESSAGE, ERROR_MESSAGE } from '../common/constants.js';

const printResult = () => {
  printMessage(LOG_MESSAGE.OUTPUT_RESULT);
}

const printCar = (name, position) => {
  printMessage(`${name} : ${GAME_SETTING.MOVE_FORWARD_POSITION.repeat(position)}`);
}

const printWinner = (winner) => {
  printMessage(`${LOG_MESSAGE.OUTPUT_WINNER}${winner.join(', ')}`);
}

const printError = () => {
  printMessage(ERROR_MESSAGE);
}

export { printResult, printCar, printWinner, printError }
