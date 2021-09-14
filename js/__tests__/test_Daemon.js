/* eslint-disable no-undef */
import Daemon from '../Characters/Daemon';

test('Valid', () => {
  const character = new Daemon('Hero');
  expect(character.name).toBe('Hero');
  expect(character.type).toBe('Daemon');
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});
