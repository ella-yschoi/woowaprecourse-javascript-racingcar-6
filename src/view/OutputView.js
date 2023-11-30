import { GAME, LOG } from '../common/constants.js';
import { printMessage } from '../common/utils.js';

class OutputView {
  static printResult = () => {
    printMessage(LOG.output_result);
  }

  static printCar = (name, position) => {
    printMessage(`${name} : ${GAME.move_position.repeat(position)}`);
  }

  static printWinner = (winner) => {
    printMessage(`${LOG.output_winner}${winner.join(GAME.comma_space)}`);
  }
}

export default OutputView;