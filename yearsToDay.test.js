const yearsToDay = require('./yearsToDays')


test('Pasa los años a día', () => {
  expect(yearsToDay(1)).toBe(365);
});

test('Devuelve 0 cuando no es un número', () => {
  expect(yearsToDay("hola mundo")).toBe(0);
  expect(yearsToDay([1,2])).toBe(0);
});

test('Devuelve 0 cuando es menor de 0', () => {
  expect(yearsToDay(-1)).toBe(0);
});




