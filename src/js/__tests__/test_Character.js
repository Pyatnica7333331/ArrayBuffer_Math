/* eslint-disable no-undef */
import Character from '../Characters/Character';

test('Should be created valid person', () => {
  const character = new Character('Model', 'Daemon');
  const newPerson = {
    name: 'Model',
    type: 'Daemon',
    health: 100,
    level: 1,
  };
  expect(character).toEqual(newPerson);
});
test('Person Undead has invalid name', () => {
  expect(() => new Character('ModelCharacter', 'Undead')).toThrow('Неверное имя');
});
test('Person has invalid type of character', () => {
  expect(() => new Character('Model', 'Bear')).toThrow('Неверный тип');
});
