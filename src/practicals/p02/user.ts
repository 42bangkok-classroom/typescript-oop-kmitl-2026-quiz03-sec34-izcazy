export class User {
    firstname: string
    lastname: string
    private age: number = 0
    static  BIRTH_YEAR: number = 2000

    constructor(firstname: string, lastname: string){
        this.firstname = firstname
        this.lastname = lastname
    }

    setFirstname(){
        return(`${this.firstname}`)
    }
    setLastname(){
        return(`${this.lastname}`)
    }
    setAge(age: number){
        if(age <= 0){
            this.age = age
        }
    }
    getAge(){
        return this.age
    }
    getFullName(){
        return(`${this.firstname} ${this.lastname}`)
    }
}
