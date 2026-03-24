export class OnlineCourse {
    public courseName: string
    public maxStudents: number
    private enrolledStudents: number = 0
    private isOpen: boolean = true

    constructor(courseName: string, maxStudents: number){
        this.courseName = courseName;
        this.maxStudents = maxStudents;
        this.enrolledStudents = 0;
        this.isOpen = true;
    }
    public enroll(): boolean{
        if(this.canEnroll()){
            this.enrolledStudents++;
            return true;
        }
        else{
            return false;
        }
    }
    public closeCourse(): void{
        this.isOpen = false
    }
    public getAvailableSeats(): number{
        this.maxStudents -= this.enrolledStudents
        return this.maxStudents;
    }
    public getCourseStatus(): string{
        return this.isOpen ? 'Open' : 'Closed'
    }
    private canEnroll():boolean{
        if(this.maxStudents > 0 && this.isOpen){
            return true
        }
        this.closeCourse()
        return false

    }
}

