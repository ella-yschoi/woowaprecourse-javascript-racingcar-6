import { ERROR } from '../common/constants.js';
import { throwError } from '../common/utils.js';
import { isValidCarName } from '../common/validator.js';

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
    this.#validateCarName(name);
  }

  #validateIsEmpty(name) {
    if (!name) {
      throwError(ERROR.empty_input);
    }
    return name;
  }

  #validateCarName(name) {
    if (!isValidCarName(name)) {
      throwError(ERROR.invalid_car_name);
    }
    return name;
  }
};

export default Car;
