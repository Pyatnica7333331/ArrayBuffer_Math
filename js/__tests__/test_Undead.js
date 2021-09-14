/* eslint-disable no-undef */
import Undead from '../Characters/Undead';

test('Valid', () => {
  const character = new Undead('Hero');
  expect(character.name).toBe('Hero');
  expect(character.type).toBe('Undead');
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});
