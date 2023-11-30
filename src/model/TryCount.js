import { ERROR } from '../common/constants';
import { throwError } from '../common/utils.js';

class TryCount {

  #tryCount;

  constructor(tryCount) {
    this.#validate(tryCount);
    this.#tryCount = tryCount;
  }

  getTryCount() {
    return this.#tryCount;
  }

  #validate(tryCount) {
    this.#validateIsEmpty(tryCount);
    this.#validateTryCount(tryCount);
  }

  #validateIsEmpty(tryCount) {
    if (!tryCount) {
      throwError(ERROR.empty_input);
    }
    return tryCount;
  }

  #validateTryCount(tryCount) {
    if (!isValidTryCount(tryCount)) {
      throwError(ERROR.invalid_try_count);
    }
    return tryCount;
  }
}

export default TryCount;