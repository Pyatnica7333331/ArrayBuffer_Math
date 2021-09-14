/* eslint-disable no-undef */
import Magician from '../Characters/Magician';

test('Valid', () => {
  const character = new Magician('Hero');
  expect(character.name).toBe('Hero');
  expect(character.type).toBe('Magician');
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});
