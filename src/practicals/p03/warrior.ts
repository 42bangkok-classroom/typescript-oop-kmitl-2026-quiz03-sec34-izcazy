import { Character } from "./character";

export class Warrior extends Character {
  weapon: string

  constructor(name: string, weapon: string, health: number){
    super(name,health)

    this.weapon = weapon
  }
  getWeapon(): string{
    
  }
}
