const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if ((name.length > 10) || (name.length < 2)) {
      throw new Error('Неверное имя');
    }
    if (!validTypes.includes(type)) {
      throw new Error('Неверный тип');
    }
  }
}
