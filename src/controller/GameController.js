import Car from '../model/Car.js';
import { getUserInputCarName, getUserInputTryCount } from '../view/inputView.js'
import { printResult, printCar, printWinner } from '../view/outputView.js';
import { isValidCarName, isValidTryCount } from '../common/validator.js';
import { GAME } from '../common/constants.js';
import { printMessage, generateRandomNumber } from '../common/utils.js';

class GameController {

  constructor() {
    this.cars = [];
  }

  moveCarsAndPrintResults() {
    this.cars.forEach((car) => {
      if (generateRandomNumber(GAME.min_random_number, GAME.max_random_number) >= GAME.move_forward_requirement) {
        car.moveForward();
      }
      printCar(car.getName(), car.getPosition());
    });
    printMessage(GAME.blank_space);
  }  

  raceCar(tryCount) {
    printResult();
    for (let i = 0; i < tryCount; i += 1) {
      this.moveCarsAndPrintResults();
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
      return this.handleTryCount();
    }
    return tryCount;
  }

  async setCars() {
    const names = await getUserInputCarName();
    if (!isValidCarName(names)) {
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
