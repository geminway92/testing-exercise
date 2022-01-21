/*
Ejemplos

  getTLD(‘tahichemena.es’) ➞ ‘.es’
  getTLD(‘epicgames.com/store/es-ES’) ➞ ‘.com’
  getTLD(5666) ➞ null
  getTLD(‘mojo_picón’) ➞ null

*/

const getTLD = require('./obtencionDelTLD')

test('devolver tld de dominio', () => {
  expect(getTLD('tahichemena.es')).toBe('.es')
})

test('Devolver el TLD aunque tenga rutas', () => {
  expect(getTLD('epicgames.com/store/es-ES')).toBe('.com')
})


test('Comprobar que No sea un numero', () => {
  expect(getTLD(5666)).toBeFalsy
})

test('Comprobar que sea una ruta', () => {
  expect(getTLD('mojo_picon')).toBeFalsy
})

