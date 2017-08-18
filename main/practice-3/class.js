// Write your code here
module.exports = class Class {
    constructor(number)
    {
        this.number=number;
        this.member=[];
        this.teacherMember=[];
    }
    
    assignLeader(student)
    {
        this.leader=student.name;
         for (let value of this.teacherMember) {
        value.notifyLeaderAssigned(`${student.name} become Leader of Class ${this.number}`);        
      }
        if(this.hasStudent(student.name))
            {
                return ("Assign team leader successfully.");

            }
        else{return ("It is not one of us.")};
    }
    appendMember(student)
    {
        this.member.push(student.name);
        for (let value of this.teacherMember) {
      value.notifyStudentAppended(`${student.name} has joined Class ${this.number}`);    
    }
    }
    hasStudent(studentName)
    {
        for(let i of this.member)
            {
                if(i===studentName)
                    {
                        return true;
                    }
            }
                return false;
    }
}