export default class Character {
  constructor(name, type, attack = 0, defence = 0) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;

    if ((this.name.length > 10) || (this.name.length < 2)) {
      throw new Error('Неверное имя');
    }
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(this.type)) {
      throw new Error('Неверный тип');
    }
  }
}
