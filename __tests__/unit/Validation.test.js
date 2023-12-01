/* eslint-disable max-lines-per-function */
import { isValidCarName, isValidTryCount } from '../../src/common/validator.js';

describe('자동차 이름 유효성 검사', () => {
  const validCarNames = ['Tesla,Volvo', '테슬라,메르세데스'];
  const duplicatedCarNames = ['BMW,BMW', '현대,현대'];
  const invalidLengthNames = ['Mercedes,Toyota,Lamborghini', '메르세데스벤츠,에디슨모터스'];
  const invalidSeperatedNames = ['Ford,', '포드-테슬라', 'BMW, 현대'];

  test('유효한 이름이면 성공', () => {
    validCarNames.forEach((carNames) => {
      expect(isValidCarName(carNames)).toBe(true);
    });
  });

  test('이름 간의 중복이 있으면 실패', () => {
    duplicatedCarNames.forEach((carNames) => {
      expect(isValidCarName(carNames)).toBe(false);
    });
  });

  test('6자 이상이면 실패', () => {
    invalidLengthNames.forEach((carNames) => {
      expect(isValidCarName(carNames)).toBe(false);
    });
  });

  test('쉼표로 구분되지 않으면 실패', () => {
    invalidSeperatedNames.forEach((carNames) => {
      expect(isValidCarName(carNames)).toBe(false);
    });
  });
});

describe('시도 횟수 유효성 검사', () => {
  const validTryCounts = [1, 5, 99];
  const invalidTryCounts = [-1, '02', 'abc', '@'];

  test('양의 정수면 성공', () => {
    validTryCounts.forEach((tryCount) => {
      expect(isValidTryCount(tryCount)).toBe(true);
    });
  });

  test('양의 정수가 아니면 실패', () => {
    invalidTryCounts.forEach((tryCount) => {
      expect(isValidTryCount(tryCount)).toBe(false);
    });
  });
});
