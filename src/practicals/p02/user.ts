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
        return this.age
    }
    getAge(){
        return this.age
    }
    getFullName(){
        if(!this.firstname && !this.lastname){
            return ""
        }
        return(`${this.firstname} ${this.lastname}`)
    }
}
