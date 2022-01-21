/*const yearsToDay = require('./yearsToDays')


test('Pasa los años a día', () => {
  expect(yearsToDay(1)).toBe(365);
});
*/
/* Condiciones:
    ('cualquier cosa') -> false
    ([2, 4, 10, -2, 1]) -> [-2, 10]
    ([2, 'trece', 56]) -> false
    (17) -> [17, 17]
*/

const getMinAndMax = require('./minAndmax');

test('Cualquier cosa',() => {
  expect(getMinAndMax('cualquier cosa')).toBeFalsy
});

test('El número min y max', () => {
  expect(getMinAndMax([2, 4, 10, -2, 1])).toEqual([-2,10]);
});

test('array con un valor no numerico', () => {
  expect(getMinAndMax([2, 'trece', 56])). toBeFalsy
})

test('recibe un solo numero ', () => {
  expect(getMinAndMax(17)).toEqual([17,17]);
})
