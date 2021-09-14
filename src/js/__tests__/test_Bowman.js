/* eslint-disable no-undef */
import Bowman from '../Characters/Bowman';

test('Valid', () => {
  const character = new Bowman('BowSuper');
  expect(character.name).toBe('BowSuper');
  expect(character.type).toBe('Bowman');
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});
