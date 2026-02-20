export class User {
    private firstname?: string 
    private lastname?: string 
    private age: number = 0
    static  BIRTH_YEAR: number = 2000



    setFirstname(firstname: string){
        this.firstname = firstname
    }
    setLastname(lastname: string){
        this.lastname = lastname
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
