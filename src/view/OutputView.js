import { printMessage } from '../common/utils.js';
import { GAME, LOG, ERROR } from '../common/constants.js';

class OutputView {
  static printResult = () => {
    printMessage(LOG.output_result);
  }
  
  static printCar = (name, position) => {
    printMessage(`${name} : ${GAME.move_position.repeat(position)}`);
  }

  static printWinner = (winner) => {
    printMessage(`${LOG.output_winner}${winner.join(', ')}`);
  }
}

export default OutputView;
