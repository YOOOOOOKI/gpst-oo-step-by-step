const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name,age,clazzes)
    {
        super(name,age);
        this.clazzes=clazzes;
    }
    introduce()
    {
        if(this.clazzes.length!==0)
            {
                let arr1=[];
                for(let i of this.clazzes)
                    {
                        arr1.push(i.number);
                    }
                return `${super.introduce()} I am a Teacher. I teach Class ${arr1.join(",")}.`; 
            }
        
        else
        return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
    isTeaching(student){
        for(let i of this.clazzes)
            {
                if(i.number===student.clazz.number&&i.hasStudent(student.name))
                    return true;
            }
            return false;
    }
    notifyStudentAppended()
    {
        // if(student.clazz.hasStudent(student.name)&&this.isTeaching(student)&&student.name===student.clazz.leader)
        //     {
        //         return `I know ${student.name} become Leader of ${student.clazz.number}.`;
        //     }
        // if(student.clazz.hasStudent(student.name)&&this.isTeaching(student))
        //     {
        //         console.log (`I know ${student.name} has joined Class ${student.clazz.number}.`);
        //     }
    }
    notifyLeaderAssigned()
}