// Write your code here
module.exports = class Class {
    constructor(number)
    {
        this.number=number;
        this.member=[];
    }
    assignLeader(student)
    {
        this.leader=student.name;
        if(this.hasStudent(student.name))
            {
                return ("Assign team leader successfully.");

            }
        else{return ("It is not one of us.")};
    }
    appendMember(student)
    {
        this.member.push(student.name);
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