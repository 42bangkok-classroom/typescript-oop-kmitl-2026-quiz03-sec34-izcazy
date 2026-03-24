import { Character } from "./character";

export class Warrior extends Character {
  weapon: string

  constructor(name: string, weapon: string, health: number){
    super(name,health)

    this.weapon = weapon
  }
  getWeapon(): string{
    return this.weapon;
  }
  public override receiveDamage(damage: number): void {
        // Logic: รับดาเมจเพียง 90% (ลดไป 10%)
        this.health -= (damage * 0.9);
    }
}
