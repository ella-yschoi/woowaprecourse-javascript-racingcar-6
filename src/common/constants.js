const GAME = Object.freeze({
  min_length: 1,
  max_length: 5,
  min_try_count: 1,
  min_random: 0,
  max_random: 9,
  move_requirement: 4,
  move_position: '-',
  blank_space: '',
});

const REGEX = Object.freeze({
  allowed_count: /^[1-9]\d*$/,
  allowed_name: /^[a-zA-Z가-힣0-9, ]+$/,
});

const LOG = Object.freeze({
  input_car_name: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  input_try_count: '시도할 횟수는 몇 회인가요?\n',
  output_result: '\n실행 결과',
  output_winner: '\n최종 우승자 : ',
});

const ERROR = Object.freeze({
  prefix: '[ERROR] ',
  empty_input: '입력된 값이 없어요.',
  invalid_car_name: `자동차 이름은 중복 없이 각 ${GAME.min_length}자 이상 ~ ${GAME.max_length}자 이하로 입력해 주세요.`,
  invalid_try_count: `${GAME.min_try_count} 이상의 숫자를 입력해 주세요.`,
});

export { GAME, REGEX, LOG, ERROR }
