import { ERROR } from '../common/constants';
import { isSeperatedByComma, isUniqueValue, throwError } from '../common/utils.js';

class Car {

  #name;

  #position = 0;

  constructor(name) {
    this.#validate(name);
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  moveForward() {
    this.#position += 1;
  }

  #validate(name) {
    this.#validateIsEmpty(name);
    this.#validateIsDuplicate(name);
    this.#validateIsSeperatedByComma(name);
  }

  #validateIsEmpty(name) {
    if (!name) {
      throwError(ERROR.empty_input);
    }
    return name;
  }

  #validateIsDuplicate(name) {
    if (!isUniqueValue(name)) {
      throwError(ERROR.duplicated_name);
    }
    return name;
  }

  #validateIsSeperatedByComma(name) {
    if (!isSeperatedByComma(name)) {
      throwError(ERROR.not_seperated_comma);
    }
    return name;
  }
}

export default Car;