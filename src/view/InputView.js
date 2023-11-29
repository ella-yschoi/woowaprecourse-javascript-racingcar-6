import { Console } from '@woowacourse/mission-utils';
import { throwError } from '../common/utils.js';
import { isValidCarName, isValidTryCount } from '../common/validator.js';
import { LOG, ERROR } from '../common/constants.js';

class InputView {
  
  static getUserInputCarName = async () => {
    const input = await Console.readLineAsync(LOG.input_car_name);
    if (!input) {
      throwError(ERROR.empty_input);
    }
    if (!isValidCarName(input)) {
      throwError(ERROR.invalid_car_name);
    }
    return input;
  }
  
  static getUserInputTryCount = async () => {
    const input = await Console.readLineAsync(LOG.input_try_count);
    if (!input) {
      throwError(ERROR.empty_input);
    }
    if (!isValidTryCount(input)) {
      throwError(ERROR.invalid_try_count);
    }
    return input;
  }
}

export default InputView;
