import { printMessage } from '../common/utils.js';
import { GAME, LOG, ERROR } from '../common/constants.js';

const printResult = () => {
  printMessage(LOG.output_result);
}

const printCar = (name, position) => {
  printMessage(`${name} : ${GAME.move_forward_position.repeat(position)}`);
}

const printWinner = (winner) => {
  printMessage(`${LOG.output_winner}${winner.join(', ')}`);
}

const printError = () => {
  printMessage(ERROR);
}

export { printResult, printCar, printWinner, printError }
