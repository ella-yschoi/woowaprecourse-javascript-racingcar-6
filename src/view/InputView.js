import { Console } from '@woowacourse/mission-utils';
import { LOG } from '../common/constants.js';

class InputView {
  static getCarName = async () => {
    return Console.readLineAsync(LOG.input_car_name);
  }

  static getTryCount = async () => {
    return Console.readLineAsync(LOG.input_try_count);
  }
}

export default InputView;
