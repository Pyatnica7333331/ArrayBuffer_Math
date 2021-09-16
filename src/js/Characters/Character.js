const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if ((name.length > 10) || (name.length < 2)) {
      throw new Error('Неверное имя');
    } else {
      this.name = name;
    }

    if (!validTypes.includes(type)) {
      throw new Error('Неверный тип');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }
}
