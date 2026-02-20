export class OnlineCourse {
    public courseName: string
    public maxStudents: number
    private enrolledStudents: number = 0
    private isOpen: boolean = true

    constructor(courseName: string, maxStudents: number){
        this.courseName = courseName
        this.maxStudents = maxStudents
    }
    enroll(): boolean{
        return this.canEnroll()
    }
    closeCourse(): void{
        this.isOpen = false
    }
    getAvailableSeats(): number{
        return this.maxStudents
    }
    getCourseStatus(): string{
        return this.isOpen ? 'Open' : 'Closed'
    }
    private canEnroll():boolean{
        if(this.maxStudents > 0){
            this.maxStudents--
            return true
        }
        if(this.maxStudents < 1){
            this.closeCourse
        }
        return false

    }
}

