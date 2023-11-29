import Car from '../model/Car.js';
import TryCount from '../model/TryCount.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { GAME } from '../common/constants.js';
import { printMessage, generateRandomNumber } from '../common/utils.js';

class GameController {
  constructor() {
    this.cars = [];
    this.tryCount = 0;
  }

  moveCarsAndPrintResults() {
    this.cars.forEach((car) => {
      if (
        generateRandomNumber(GAME.min_random_number, GAME.max_random_number) >=
        GAME.move_forward_requirement
      ) {
        car.moveForward();
      }
      OutputView.printCar(car.getName(), car.getPosition());
    });
    printMessage(GAME.blank_space);
  }

  raceCar(tryCount) {
    OutputView.printResult();
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
    const tryCountInput = await InputView.getTryCount();
    this.tryCount = new TryCount(tryCountInput);
    return this.tryCount.getTryCount();
  }

  async setCars() {
    const nameInput = await InputView.getCarName();
    this.cars = nameInput.split(',').map((name) => new Car(name));
  }

  async play() {
    await this.setCars();

    const tryCount = await this.handleTryCount();
    this.raceCar(tryCount);

    const winner = this.getWinner();
    OutputView.printWinner(winner);
  }
}

export default GameController;
