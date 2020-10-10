import { Validator, validatePhoneNumber } from '../app';

const validator = new Validator();

test.each([
  ['SuperPuperDominator', true],
  ['kokoko2petya', true],
  ['kokoko222petya', true],
  ['kokoko222petya22lol', true],
  ['a', true],
  ['HA', true],
  ['Zhoka-vnuk-Boki', true],
  ['Zhoka-vnuk_Boki', true],
  ['1PuperDominator', false],
  ['kokoko222petya22', false],
  ['Vova1932', false],
  ['__proto__', false],
  ['kokoko2012petya', false],
  ['-kek', false],
  ['ololo-', false],
])('%s', (username, expected) => {
  const result = validator.validateUsername(username);
  expect(result).toBe(expected);
});

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['8 906 1242888', '+79061242888'],
])('%s', (phoneNumber, expected) => {
  const result = validatePhoneNumber(phoneNumber);
  expect(result).toBe(expected);
});
