/* eslint-disable no-undef */
import Swordsman from '../Characters/Swordsman';

test('Valid', () => {
  const character = new Swordsman('Hero');
  expect(character.name).toBe('Hero');
  expect(character.type).toBe('Swordsman');
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});
