/* eslint-disable no-undef */
import Zombie from '../Characters/Zombie';

test('Valid', () => {
  const character = new Zombie('Hero');
  expect(character.name).toBe('Hero');
  expect(character.type).toBe('Zombie');
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});
