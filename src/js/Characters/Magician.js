import MathCharacter from './MathCharacter';

export default class Magician extends MathCharacter {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}
