export class Character {
    name: string
    health: number = 100

    constructor(name: string, health: number){
        this.name = name

        if(health >= 100){
            this.health = health
        }
    }
    getName(): string{
        return this.name
    }
    getHealth(): number{
        return this.health
    }
    receiveDamage(damage: number){
        const receive = this.health - damage

        return receive
    }
}
