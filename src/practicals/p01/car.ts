export class Car {
    brand: string
    model: string

    constructor(){
        this.brand = ''
        this.model = ''
    }
    start(){
        console.log('Toyota Camry is starting...')
    }
    accelerate(){
        console.log('Toyota Camry is accelerating...')
    }
    brake(){
        console.log('Toyota Camry is braking...')
    }
    stop(){
        console.log('Toyota Camry is stopping...')
    }
}
