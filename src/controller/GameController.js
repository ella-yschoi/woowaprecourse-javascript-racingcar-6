import Car from '../model/Car.js';
import generateRandomNumber from '../common/generator.js';
import { getUserInputCarName, getUserInputTryCount } from '../view/inputView.js'
import { printResult, printCar, printWinner } from '../view/outputView.js';
import { isValidCarName, isValidTryCount } from '../common/validator.js';
import { GAME_SETTING, ERROR_MESSAGE } from '../common/constants.js';
import { printMessage, throwError } from '../common/utils.js';

class GameController {

  cars = [];

  moveCarForwardOrStop() {
    this.cars.forEach((car) => {
      const randomNumber = generateRandomNumber();
      if (randomNumber >= GAME_SETTING.MOVE_FORWARD_REQUIREMENT) {
        car.moveForward();
      }
    });
  }

  printForwardCarName() {
    this.cars.forEach((car) => {
      printCar(car.getName(), car.getPosition());
    });
    printMessage(GAME_SETTING.BLANK_SPACE);
  }

  raceCar(tryCount) {
    printResult();
    for (let i = 0; i < tryCount; i += 1) {
      this.moveCarForwardOrStop();
      this.printForwardCarName();
    }
  }

  getWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winnerArray = this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
    return winnerArray;
  }

  async handleTryCount() {
    const tryCount = await getUserInputTryCount();
    if (!isValidTryCount(tryCount)) {
      throwError(ERROR_MESSAGE.INCORRECT_TRY_NUMBER);
      return this.handleTryCount();
    }
    return tryCount;
  }

  async setCars() {
    const names = await getUserInputCarName();
    if (!isValidCarName(names)) {
      throwError(ERROR_MESSAGE.INCORRECT_CAR_NAME);
      await this.setCars();
      return;
    }

    this.cars = names.split(',').map((name) => new Car(name));
  }

  async play() {
    await this.setCars();
    const tryCount = await this.handleTryCount();
    this.raceCar(tryCount);
    const winner = this.getWinner();
    printWinner(winner);
  }
}

export default GameController;
