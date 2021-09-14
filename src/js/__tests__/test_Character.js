/* eslint-disable no-undef */
import Character from '../Characters/Character';

test('Valid', () => {
  const character = new Character('Model', 'Daemon');
  expect(character.name).toBe('Model');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});
test('InvalidName', () => {
  expect(() => new Character('ModelCharacter', 'Undead')).toThrow('Неверное имя');
});
test('InvalidType', () => {
  expect(() => new Character('Model', 'Bear')).toThrow('Неверный тип');
});
