import Daemon from '../Characters/Daemon';

test('Тест должен посчитать силу урона', () => {
  const daemon = new Daemon();
  daemon.attack = 100;
  daemon.distance = 2;
  daemon.stoned = true;
  daemon.getAttack();
  expect(daemon.attack).toBe(85);
});
